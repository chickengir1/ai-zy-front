import { tag } from "@/utils/constants";
import { handleValidateTodoForm } from "@/utils/validation/todoValidation";
import { useToast } from "@/providers/ToastProvider";
import {
  useFormStore,
  useTodoListActions,
  useTodoStore,
} from "@/store/todoListStore";

export function useTodolist() {
  const { form } = useFormStore();
  const { todos } = useTodoStore();
  const { addTodo, deleteTodo, setForm, resetForm } = useTodoListActions();
  const { showError, showSuccess } = useToast();

  function handleChangeTodo(e: Event.UnionEventType) {
    const { name, value } = e.target;
    setForm({ [name]: value });
  }
  function handleAddTodo() {
    const isValid = handleValidateTodoForm(todos, form, showError);

    if (!isValid) return;

    const newTodo: Todo.Todo = {
      id: todos.length + 1,
      ...form,
    };

    addTodo(newTodo);
    resetForm();
    showSuccess("완료");
  }

  function handleDeleteTodo(id: number) {
    return () => {
      deleteTodo(id);
      showSuccess("삭제되었습니다.");
    };
  }

  function getTagCounts() {
    const counts = tag.map((tag) => {
      return todos.filter((todo) => todo.tag === tag).length;
    });

    return counts;
  }

  return {
    form: { form },
    todos: { todos },
    handler: { handleDeleteTodo, handleAddTodo, handleChangeTodo },
    tagCounts: { getTagCounts },
  };
}
