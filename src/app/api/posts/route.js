import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { v4 as uuid } from "uuid";
import { authOptions } from "@/lib/auth";
import { readPosts, addPost } from "@/lib/db";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");
  const page = searchParams.get("page");

  let posts = readPosts();
  if (status) posts = posts.filter((p) => p.status === status);
  if (page) posts = posts.filter((p) => p.pages.includes(page));

  return NextResponse.json(posts);
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const body = await req.json();
  const { title, leadImage, description, pages } = body;

  if (!title || !description || !Array.isArray(pages) || pages.length === 0) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const post = {
    id: uuid(),
    title,
    leadImage: leadImage || null,
    description,
    pages,
    status: "PENDING",
    rejectReason: null,
    authorId: session.user.id,
    authorName: session.user.name,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await addPost(post);
  return NextResponse.json(post, { status: 201 });
}
