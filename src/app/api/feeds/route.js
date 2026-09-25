import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import fs from "fs";
import path from "path";
import lockfile from "proper-lockfile";
import { authOptions } from "@/lib/auth";
import { isAdminRole } from "@/lib/permissions";

const FEEDS_FILE = path.join(process.cwd(), "data", "rss-feeds.json");

function readFeeds() {
  const raw = fs.readFileSync(FEEDS_FILE, "utf-8");
  return JSON.parse(raw || "{}");
}

async function writeFeeds(data) {
  if (!fs.existsSync(FEEDS_FILE)) fs.writeFileSync(FEEDS_FILE, "{}");
  const release = await lockfile.lock(FEEDS_FILE, { retries: 5 });
  try {
    fs.writeFileSync(FEEDS_FILE, JSON.stringify(data, null, 2));
  } finally {
    await release();
  }
}

// GET /api/feeds — admin/superadmin only
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || !isAdminRole(session.user.role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  return NextResponse.json(readFeeds(), { headers: { "Cache-Control": "no-store" } });
}

// PUT /api/feeds — replaces the whole feeds object. Admin/superadmin only.
export async function PUT(req) {
  const session = await getServerSession(authOptions);
  if (!session || !isAdminRole(session.user.role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();
  if (typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid feeds payload" }, { status: 400 });
  }

  await writeFeeds(body);
  return NextResponse.json({ success: true });
}
