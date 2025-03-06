import { useTodoFormStore, useTodoListActions } from "@/store/todoListStore";

export function useTodoSubmission() {
  const { form } = useTodoFormStore();
  const { setForm } = useTodoListActions();

  function handleChangeTodo(e: Event.UnionEventType) {
    const { name, value } = e.target;
    setForm({ [name]: value });
  }

  return {
    form,
    handleChangeTodo,
  };
}
