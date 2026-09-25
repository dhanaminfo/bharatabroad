import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";
import { readUsers, writeUsers } from "@/lib/db";

// GET /api/setup — anyone can check whether setup is still available.
// No auth required: this is specifically for before any account exists.
export async function GET() {
  const users = readUsers();
  const hasSuperAdmin = users.some((u) => u.role === "SUPERADMIN");
  return NextResponse.json({ setupAvailable: !hasSuperAdmin }, { headers: { "Cache-Control": "no-store" } });
}

// POST /api/setup — create the first Super Admin. Only works once: if a
// SUPERADMIN already exists, this always refuses, no matter who's asking.
export async function POST(req) {
  const users = readUsers();
  const hasSuperAdmin = users.some((u) => u.role === "SUPERADMIN");
  if (hasSuperAdmin) {
    return NextResponse.json({ error: "Setup has already been completed" }, { status: 403 });
  }

  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (password.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 });
  }
  if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    return NextResponse.json({ error: "A user with that email already exists" }, { status: 409 });
  }

  const superAdmin = {
    id: uuid(),
    name,
    email,
    passwordHash: await bcrypt.hash(password, 10),
    role: "SUPERADMIN",
  };

  await writeUsers([...users, superAdmin]);
  return NextResponse.json({ success: true });
}
