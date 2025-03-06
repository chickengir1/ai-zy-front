import type { Todolist } from "@/hooks/api/todolist/useTodolist";

export function handleValidateTodoForm(
  todos: Todolist[],
  form: {
    title: string;
    assigneeName: string;
    state: string;
  },
  showError: (message: string) => void
) {
  const isEmpty = !form.title.trim();
  const isDuplicate = todos.some((todo) => todo.title === form.title.trim());

  if (isEmpty) {
    showError("할 일을 입력해주세요");
    return false;
  }

  if (isDuplicate) {
    showError("이미 존재하는 할 일입니다.");
    return false;
  }

  return true;
}
