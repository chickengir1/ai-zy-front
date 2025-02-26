export function getPriorityClassName(priority: string): string {
  switch (priority) {
    case "높음":
      return "bg-red-100 text-red-700";
    case "중간":
      return "bg-yellow-100 text-yellow-700";
    case "낮음":
      return "bg-green-100 text-green-700";
    default:
      return "";
  }
}

export const tabVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
};
