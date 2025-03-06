export function generateUserColor(name: string) {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
  ];
  const firstLetter = name.charAt(0).toLowerCase();
  const colorIndex = firstLetter.charCodeAt(0) % colors.length;
  return colors[colorIndex];
}

export function getInitials(name: string) {
  const [firstName, lastName] = name.trim().split(/\s+/);
  return `${firstName?.[0] || ""}${lastName?.[0] || ""}`.toUpperCase();
}
