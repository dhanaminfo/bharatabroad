import fs from "fs";
import path from "path";
import lockfile from "proper-lockfile";

const DATA_DIR = path.join(process.cwd(), "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const POSTS_FILE = path.join(DATA_DIR, "posts.json");

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw || "[]");
}

function writeJsonLocked(filePath, data) {
  // proper-lockfile needs the target file to exist before it can lock it
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, "[]");
  return lockfile.lock(filePath, { retries: 5 }).then((release) => {
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } finally {
      return release();
    }
  });
}

/* ---------- Users ---------- */
export function readUsers() {
  return readJson(USERS_FILE);
}

export function findUserByEmail(email) {
  return readUsers().find((u) => u.email.toLowerCase() === email.toLowerCase());
}

export async function writeUsers(users) {
  await writeJsonLocked(USERS_FILE, users);
}

/* ---------- Posts ---------- */
export function readPosts() {
  return readJson(POSTS_FILE);
}

export async function writePosts(posts) {
  await writeJsonLocked(POSTS_FILE, posts);
}

export async function addPost(post) {
  const posts = readPosts();
  posts.push(post);
  await writePosts(posts);
  return post;
}

export async function updatePost(id, updates) {
  const posts = readPosts();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  posts[idx] = { ...posts[idx], ...updates, updatedAt: new Date().toISOString() };
  await writePosts(posts);
  return posts[idx];
}

export async function deletePost(id) {
  const posts = readPosts();
  const next = posts.filter((p) => p.id !== id);
  await writePosts(next);
  return next.length !== posts.length;
}
