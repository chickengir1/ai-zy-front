import { FaTrash } from "react-icons/fa";
import { getPriorityClassName } from "@/utils/helpers/todolistHelpers";
import { useTodolist } from "@/hooks/ui/todolist/useTodolist";

export default function TodoItem({ todo }: { todo: Todo.Todo }) {
  const { handler } = useTodolist();
  const { handleDeleteTodo } = handler;

  return (
    <div className="flex w-full items-center justify-between rounded-lg border bg-white p-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{todo.title}</span>
        {todo.tag && (
          <span className="rounded bg-gray-100 px-2 py-1 text-xs">
            {todo.tag}
          </span>
        )}
      </div>
      <div className="flex items-center gap-4">
        <span
          className={`rounded px-2 py-1 text-xs ${getPriorityClassName(
            todo.priority
          )}`}
        >
          {todo.priority}
        </span>
        <button
          onClick={handleDeleteTodo(todo.id)}
          className="text-red-500 hover:text-red-600"
        >
          <FaTrash size={16} />
        </button>
      </div>
    </div>
  );
}
