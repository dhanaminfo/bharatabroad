import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import bcrypt from "bcryptjs";
import { authOptions } from "@/lib/auth";
import { readUsers, writeUsers } from "@/lib/db";

// PATCH /api/users/[id] — update name/role/password. Super Admin only.
// Body: { name?, role?, password? } — only send the fields you want to change.
export async function PATCH(req, { params }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "SUPERADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { id } = await params;
  const body = await req.json();

  if (body.role && !["EMPLOYEE", "ADMIN", "SUPERADMIN"].includes(body.role)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }

  const users = readUsers();
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Prevent a Super Admin from locking themselves out by demoting their own
  // account away from SUPERADMIN.
  if (users[idx].id === session.user.id && body.role && body.role !== "SUPERADMIN") {
    return NextResponse.json({ error: "You can't change your own role away from Super Admin" }, { status: 400 });
  }

  if (body.name) users[idx].name = body.name;
  if (body.role) users[idx].role = body.role;
  if (body.password) users[idx].passwordHash = await bcrypt.hash(body.password, 10);

  await writeUsers(users);

  const { passwordHash, ...safe } = users[idx];
  return NextResponse.json(safe);
}

// DELETE /api/users/[id] — Super Admin only.
export async function DELETE(req, { params }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "SUPERADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { id } = await params;

  if (id === session.user.id) {
    return NextResponse.json({ error: "You can't delete your own account" }, { status: 400 });
  }

  const users = readUsers();
  const next = users.filter((u) => u.id !== id);
  if (next.length === users.length) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  await writeUsers(next);
  return NextResponse.json({ success: true });
}
