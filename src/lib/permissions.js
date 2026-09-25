// Central place for role checks so every API route stays in sync.
// SUPERADMIN can do everything ADMIN can (content approval, RSS/ad
// management) plus user management — so anywhere "ADMIN only" was
// checked, SUPERADMIN must pass too.
export function isAdminRole(role) {
  return role === "ADMIN" || role === "SUPERADMIN";
}
