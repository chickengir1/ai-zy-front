import TabbedFormInput from "./TabbedFormInput";
import TodoItem from "./TodoItem";
import PieCharts from "@/components/schedule/charts/PieCharts";
import { twMerge } from "tailwind-merge";
import { UnitClassesStyles } from "@/utils/styles/globalStyeld";
import { tag, priorities } from "@/utils/constants";
import { useTodolist } from "@/hooks/ui/todolist/useTodolist";

export default function TodoList() {
  const { handler, tagCounts, todos } = useTodolist();
  const { handleAddTodo } = handler;
  const { getTagCounts } = tagCounts;
  const { todos: todoList } = todos;

  return (
    <div className="w-full rounded-lg bg-white p-6 shadow-md">
      <div className="mb-6">
        <h1 className="mb-1 text-2xl font-bold">투두리스트</h1>
        <p className="text-sm text-gray-500">작업을 관리하세요</p>
      </div>
      <div className="mb-8 flex flex-col items-center">
        <PieCharts labels={tag} data={getTagCounts()} />
      </div>
      <div className="min-h-36">
        <TabbedFormInput tags={tag} priorities={priorities} />
      </div>
      <button
        type="button"
        onClick={handleAddTodo}
        className={twMerge(UnitClassesStyles.button)}
      >
        투두리스트 추가하기
      </button>
      <div className="mt-6 w-full space-y-2">
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
