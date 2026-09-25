import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import fs from "fs";
import path from "path";
import lockfile from "proper-lockfile";
import { authOptions } from "@/lib/auth";
import { isAdminRole } from "@/lib/permissions";

const ADS_FILE = path.join(process.cwd(), "data", "ads.json");
const VALID_SLOTS = ["ad1", "ad2", "ad3"];

function readAds() {
  const raw = fs.readFileSync(ADS_FILE, "utf-8");
  return JSON.parse(raw || "{}");
}

async function writeAds(data) {
  if (!fs.existsSync(ADS_FILE)) fs.writeFileSync(ADS_FILE, "{}");
  const release = await lockfile.lock(ADS_FILE, { retries: 5 });
  try {
    fs.writeFileSync(ADS_FILE, JSON.stringify(data, null, 2));
  } finally {
    await release();
  }
}

function isValidAdsShape(body) {
  if (typeof body !== "object" || body === null || Array.isArray(body)) return false;
  for (const category of Object.values(body)) {
    if (typeof category !== "object" || category === null || Array.isArray(category)) return false;
    for (const [slot, ad] of Object.entries(category)) {
      if (!VALID_SLOTS.includes(slot)) return false;
      if (ad !== null && (typeof ad !== "object" || Array.isArray(ad))) return false;
    }
  }
  return true;
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || !isAdminRole(session.user.role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  return NextResponse.json(readAds(), { headers: { "Cache-Control": "no-store" } });
}

export async function PUT(req) {
  const session = await getServerSession(authOptions);
  if (!session || !isAdminRole(session.user.role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();
  if (!isValidAdsShape(body)) {
    return NextResponse.json(
      { error: "Invalid ads payload — expected { category: { ad1, ad2, ad3 } }" },
      { status: 400 }
    );
  }

  await writeAds(body);
  return NextResponse.json({ success: true });
}
