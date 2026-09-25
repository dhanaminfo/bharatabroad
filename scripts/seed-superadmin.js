// Run once: node scripts/seed-superadmin.js
// Adds a SUPERADMIN account without touching your existing users.json entries.
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { v4: uuid } = require("uuid");

async function main() {
  const filePath = path.join(process.cwd(), "data", "users.json");
  const existing = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, "utf-8") || "[]") : [];

  if (existing.some((u) => u.email === "superadmin@bharatabroad.com")) {
    console.log("Super Admin already exists — skipping.");
    return;
  }

  const superAdmin = {
    id: uuid(),
    name: "Super Admin",
    email: "superadmin@bharatabroad.com",
    passwordHash: await bcrypt.hash("superadmin123", 10),
    role: "SUPERADMIN",
  };

  fs.writeFileSync(filePath, JSON.stringify([...existing, superAdmin], null, 2));
  console.log("Seeded Super Admin:");
  console.log(" superadmin@bharatabroad.com / superadmin123");
}

main();
