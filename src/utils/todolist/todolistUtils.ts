export const state = ["긴급", "업무", "프로젝트", "팔로업", "개인"];

export function getPriorityClassName(status: string): string {
  switch (status) {
    case state[0]:
      return "bg-red-100 text-red-700";
    case state[1]:
      return "bg-yellow-100 text-yellow-700";
    case state[2]:
      return "bg-blue-100 text-blue-700";
    case state[3]:
      return "bg-purple-100 text-purple-700";
    case state[4]:
      return "bg-indigo-100 text-indigo-700";
    default:
      return "";
  }
}

export function getTodoAssigneeNames(todos: Todo.TodoItem[]) {
  return [...new Set(todos.map((todo) => todo.assigneeName))].filter(Boolean);
}

export function getTodoAssigneeNameCounts(todos: Todo.TodoItem[]) {
  return getTodoAssigneeNames(todos).map(
    (name) => todos.filter((todo) => todo.assigneeName === name).length
  );
}

export const tabVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
};
