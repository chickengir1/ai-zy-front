import { useTodoHandlers } from "@/hooks/business/todolist/useTodoHandlers";
import { useTodoSubmission } from "@/hooks/business/todolist/useTodoSubmission";
import { useTodoTabNavigation } from "@/hooks/business/todolist/useTodoTabNavigation";

export function useTodolist(todoId?: string) {
  const { form, handleChangeTodo } = useTodoSubmission();
  const { handleAddTodo, handleDeleteTodo } = useTodoHandlers(todoId);
  const { handleTabChange, activeTab, getTabClassName } =
    useTodoTabNavigation();

  return {
    form: { form },
    state: { activeTab },
    handler: {
      handleAddTodo,
      handleChangeTodo,
      handleTabChange,
      getTabClassName,
      handleDeleteTodo,
    },
  };
}
