// Run once: node scripts/seed-users.js
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { v4: uuid } = require("uuid");

async function main() {
  const users = [
    {
      id: uuid(),
      name: "Employee One",
      email: "employee@bharatabroad.com",
      passwordHash: await bcrypt.hash("employee123", 10),
      role: "EMPLOYEE",
    },
    {
      id: uuid(),
      name: "Admin One",
      email: "admin@bharatabroad.com",
      passwordHash: await bcrypt.hash("admin123", 10),
      role: "ADMIN",
    },
  ];

  const filePath = path.join(process.cwd(), "data", "users.json");
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  console.log("Seeded users:");
  console.log(" employee@bharatabroad.com / employee123");
  console.log(" admin@bharatabroad.com / admin123");
}

main();
