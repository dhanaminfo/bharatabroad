import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";
import { authOptions } from "@/lib/auth";
import { readUsers, writeUsers } from "@/lib/db";

// GET /api/users — Super Admin only. Never returns password hashes.
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "SUPERADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const users = readUsers().map(({ passwordHash, ...safe }) => safe);
  return NextResponse.json(users, { headers: { "Cache-Control": "no-store" } });
}

// POST /api/users — create a new employee/admin account. Super Admin only.
export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "SUPERADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { name, email, password, role } = await req.json();

  if (!name || !email || !password || !role) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!["EMPLOYEE", "ADMIN", "SUPERADMIN"].includes(role)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }

  const users = readUsers();
  if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    return NextResponse.json({ error: "A user with that email already exists" }, { status: 409 });
  }

  const newUser = {
    id: uuid(),
    name,
    email,
    passwordHash: await bcrypt.hash(password, 10),
    role,
  };

  await writeUsers([...users, newUser]);

  const { passwordHash, ...safe } = newUser;
  return NextResponse.json(safe, { status: 201 });
}
