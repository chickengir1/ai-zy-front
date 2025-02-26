import { create } from "zustand";
import { tag, priorities } from "@/utils/constants";

const initialTodoForm: Todo.TodoForm = {
  title: "",
  tag: tag[0],
  priority: priorities[0],
};

export const useFormStore = create<Todo.TodoFormState>((set) => ({
  form: initialTodoForm,
  actions: {
    setForm: (form) => set((state) => ({ form: { ...state.form, ...form } })),
    resetForm: () => set({ form: initialTodoForm }),
  },
}));

export const useTodoStore = create<Todo.TodoState>((set) => ({
  todos: [],
  actions: {
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    deleteTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),
  },
}));

export const useTabStore = create<Todo.TabState>((set) => ({
  activeTab: "title",
  actions: {
    setTab: (tab) => set({ activeTab: tab }),
  },
}));

export const useTodoListActions = () => {
  const { addTodo, deleteTodo } = useTodoStore().actions;
  const { setForm, resetForm } = useFormStore().actions;
  const { setTab } = useTabStore().actions;

  return { addTodo, deleteTodo, setForm, resetForm, setTab };
};
