import { twMerge } from "tailwind-merge";
import { useTodolist } from "@/hooks/business/todolist/useTodolist";
import { UnitStyles } from "@/utils/styles/global";
import {
  getTodoAssigneeNameCounts,
  getTodoAssigneeNames,
} from "@/utils/todolist/todolistUtils";
import PieCharts from "@/components/schedule/charts/PieCharts";
import TodoInputTabs from "@/components/schedule/todolist/TodoInputTabs";
import TodoItem from "@/components/schedule/todolist/TodoItem";

interface TodolistProps {
  content: Todo.TodoItem[];
}

export default function Todolist({ content }: TodolistProps) {
  const { handler } = useTodolist();
  const { handleAddTodo } = handler;

  const chartLabels = getTodoAssigneeNames(content);
  const chartData = getTodoAssigneeNameCounts(content);

  return (
    <div className="w-full rounded-lg bg-white p-6 shadow-md">
      <div className="mb-6">
        <h1 className="mb-1 text-2xl font-bold">투두리스트</h1>
        <p className="text-sm text-gray-500">작업을 관리하세요</p>
      </div>
      <div className="mb-8 flex flex-col items-center">
        <PieCharts labels={chartLabels} data={chartData} />
      </div>
      <div className="min-h-36">
        <TodoInputTabs />
      </div>
      <button
        type="button"
        onClick={handleAddTodo}
        className={twMerge(UnitStyles.button)}
      >
        투두리스트 추가하기
      </button>
      <div className="mt-6 w-full space-y-2">
        {content.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
