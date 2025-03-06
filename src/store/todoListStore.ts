import { create } from "zustand";

const initialTodoForm: Todo.TodoForm = {
  title: "",
  assigneeName: "",
  state: "",
};

export const useTodoFormStore = create<Todo.TodoFormState>((set) => ({
  form: initialTodoForm,
  actions: {
    setForm: (form) => set((state) => ({ form: { ...state.form, ...form } })),
    resetForm: () => set({ form: initialTodoForm }),
  },
}));

export const useTodoStore = create<Todo.TodoStoreState>((set) => ({
  todos: [],
  actions: {
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    removeTodo: (todoId) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== todoId),
      })),
  },
}));

export const useTodoTabStore = create<Todo.TabStoreState>((set) => ({
  activeTab: "title",
  actions: {
    setTab: (tab) => set({ activeTab: tab }),
  },
}));

export const useTodoListActions = () => {
  const { addTodo, removeTodo } = useTodoStore().actions;
  const { setForm, resetForm } = useTodoFormStore().actions;
  const { setTab } = useTodoTabStore().actions;

  return { addTodo, removeTodo, setForm, resetForm, setTab };
};
