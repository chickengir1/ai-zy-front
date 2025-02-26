declare namespace Todo {
  export interface TodoForm {
    title: string;
    tag: string;
    priority: string;
  }

  export interface Todo extends TodoForm {
    id: number;
  }

  export interface TodoFormState {
    form: TodoForm;
    actions: {
      setForm: (form: Partial<TodoForm>) => void;
      resetForm: () => void;
    };
  }

  export interface TodoState {
    todos: Todo[];
    actions: {
      addTodo: (todo: Todo) => void;
      deleteTodo: (id: number) => void;
    };
  }

  export interface TabState {
    activeTab: "title" | "tag" | "priority";
    actions: {
      setTab: (tab: "title" | "tag" | "priority") => void;
    };
  }
}
