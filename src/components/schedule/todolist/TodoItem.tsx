import { FaTrash } from "react-icons/fa";
import { Todo } from "./Todolist";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  getPriorityClassName: (priority: string) => string;
}

export default function TodoItem({
  todo,
  onDelete,
  getPriorityClassName,
}: TodoItemProps) {
  function handleDelete() {
    onDelete(todo.id);
  }

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
          onClick={handleDelete}
          className="text-red-500 hover:text-red-600"
        >
          <FaTrash size={16} />
        </button>
      </div>
    </div>
  );
}
