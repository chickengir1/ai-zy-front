import { FaTrash } from "react-icons/fa";
import { Todolist } from "@/hooks/api/todolist/useTodolist";
import { useTodolist } from "@/hooks/business/todolist/useTodolist";
import { getPriorityClassName } from "@/utils/todolist/todolistUtils";

export default function TodoItem({ todo }: { todo: Todolist }) {
  const { handler } = useTodolist(todo.id);
  const { handleDeleteTodo } = handler;

  return (
    <div className="flex w-full items-center justify-between rounded-lg border bg-white p-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{todo.title}</span>
        {todo.assigneeName && (
          <span className="rounded bg-gray-100 px-2 py-1 text-xs">
            {todo.assigneeName}
          </span>
        )}
      </div>
      <div className="flex items-center gap-4">
        <span
          className={`rounded px-2 py-1 text-xs ${getPriorityClassName(
            todo.state
          )}`}
        >
          {todo.state}
        </span>
        <button
          onClick={handleDeleteTodo}
          className="text-red-500 hover:text-red-600"
        >
          <FaTrash size={16} />
        </button>
      </div>
    </div>
  );
}
