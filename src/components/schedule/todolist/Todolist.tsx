import { useMemo, useState } from "react";
import TabbedFormInput from "./TabbedFormInput";
import TodoItem from "./TodoItem";
import PieCharts from "@/components/schedule/charts/PieCharts";
import { twMerge } from "tailwind-merge";
import { UnitClasses } from "@/utils/styles/globalStyeld";

interface TodoForm {
  title: string;
  tag: string;
  priority: string;
}

export interface Todo extends TodoForm {
  id: number;
}

const tags = ["업무", "개인", "학습", "건강", "취미"];
const priorities = ["높음", "중간", "낮음"];

export default function TodoList() {
  // NOTE : 훅과 유틸리티 함수로 분리

  const [form, setForm] = useState<TodoForm>({
    title: "",
    tag: "",
    priority: "",
  });
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(): void {
    if (!form.title) return;

    const newTodo: Todo = {
      id: todos.length + 1,
      title: form.title,
      tag: form.tag,
      priority: form.priority,
    };

    setTodos([...todos, newTodo]);

    setForm({
      title: "",
      tag: "",
      priority: "",
    });
  }

  function deleteTodo(id: number): () => void {
    return (): void => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function getPriorityClassName(priority: string): string {
    switch (priority) {
      case "높음":
        return "bg-red-100 text-red-700";
      case "중간":
        return "bg-yellow-100 text-yellow-700";
      case "낮음":
        return "bg-green-100 text-green-700";
      default:
        return "";
    }
  }

  const tagCounts = useMemo(() => {
    const counts = tags.map((tag) => {
      return todos.filter((todo) => todo.tag === tag).length;
    });

    return counts;
  }, [todos]);

  return (
    <div className="w-full rounded-lg bg-white p-6 shadow-md">
      <div className="mb-6">
        <h1 className="mb-1 text-2xl font-bold">투두리스트</h1>
        <p className="text-sm text-gray-500">작업을 관리하세요</p>
      </div>
      <div className="mb-8 flex flex-col items-center">
        <PieCharts labels={tags} data={tagCounts} />
      </div>
      <div className="min-h-36">
        <TabbedFormInput
          form={form}
          tags={tags}
          priorities={priorities}
          onChange={handleChange}
        />
      </div>
      <button onClick={addTodo} className={twMerge(UnitClasses.button)}>
        투두리스트 추가하기
      </button>

      <div className="mt-6 w-full space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo(todo.id)}
            getPriorityClassName={getPriorityClassName}
          />
        ))}
      </div>
    </div>
  );
}
