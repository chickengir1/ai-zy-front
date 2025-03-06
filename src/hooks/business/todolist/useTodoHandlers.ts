import { useToast } from "@/providers/toast/ToastProvider";
import {
  useCreateTodolist,
  useDeleteTodolist,
} from "@/hooks/api/todolist/useTodolist";
import { useParamsId } from "@/hooks/utility/common/useParams";
import {
  useTodoFormStore,
  useTodoListActions,
  useTodoStore,
} from "@/store/todoListStore";
import { state } from "@/utils/todolist/todolistUtils";
import { handleValidateTodoForm } from "@/utils/validation/todoValidation";
import { useTodolistData } from "@/hooks/api/todolist/useTodolistData";

export function useTodoHandlers(todoItemId?: string) {
  const projectId = useParamsId();
  const todoId = todoItemId ?? "";

  const { form } = useTodoFormStore();
  const { todos } = useTodoStore();
  const { addTodo, removeTodo, resetForm } = useTodoListActions();

  const { showError, showSuccess } = useToast();
  const { content } = useTodolistData();

  const { mutate: createTodo } = useCreateTodolist(projectId);
  const { mutate: deleteTodoRequest } = useDeleteTodolist(projectId, todoId);

  function handleAddTodo() {
    const isValid = handleValidateTodoForm(todos, form, showError);
    if (!isValid) return;

    const date = new Date().toISOString();
    const newTodo: Todo.TodoItem = {
      id: crypto.randomUUID(),
      title: form.title,
      state: form.state || state[0],
      assigneeName: form.assigneeName || "",
      createdAt: date,
      updatedAt: date,
      deletedAt: date,
    };

    createTodo(newTodo, {
      onSuccess: () => {
        addTodo(newTodo);
        content.push(newTodo);
        resetForm();
        showSuccess("추가되었습니다.");
      },
      onError: () => showError("추가에 실패했습니다."),
    });
  }

  function handleDeleteTodo() {
    const filterTodos = () => {
      const index = content.findIndex((todo) => todo.id === todoId);
      if (index !== -1) content.splice(index, 1);
    };

    deleteTodoRequest(undefined, {
      onSuccess: () => {
        removeTodo(todoId);
        filterTodos();
        showSuccess("삭제되었습니다.");
      },
      onError: () => showError("삭제에 실패했습니다."),
    });
  }

  return {
    handleAddTodo,
    handleDeleteTodo,
  };
}
