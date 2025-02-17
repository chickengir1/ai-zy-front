interface ModeColors {
  bg: string;
  text: string;
  border: string;
  placeholder: string;
}

export function getModeColors(isCommandMode: boolean): ModeColors {
  return isCommandMode
    ? {
        bg: "bg-[#313338]",
        text: "text-gray-100",
        border: "border-[#F0F3F7]",
        placeholder: "placeholder-gray-400",
      }
    : {
        bg: "bg-white",
        text: "text-gray-800",
        border: "border-gray-200",
        placeholder: "placeholder-gray-500",
      };
}

export function getMessageStyle(role: "user" | "bot", isCommandMode: boolean) {
  if (role === "user") {
    return "bg-indigo-600 text-white";
  }
  return isCommandMode
    ? "bg-gray-600 text-gray-100"
    : "bg-gray-200 text-gray-800";
}
