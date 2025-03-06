declare namespace Todo {
  export interface TodoItem {
    id: string;
    title: string;
    assigneeName: string;
    state: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  }

  export interface TodoForm {
    title: string;
    assigneeName: string;
    state: string;
  }

  export type TodoTab = "title" | "state";

  export interface TodoActions {
    addTodo: (todo: TodoItem) => void;
    deleteTodo: (id: string) => void;
    setForm: (form: Partial<TodoForm>) => void;
    resetForm: () => void;
    setTab: (tab: TodoTab) => void;
  }

  export interface TodoSummary {
    uniqueAssigneeNames: string[];
    uniqueStates: string[];
    assigneeNameCounts: number[];
  }

  export interface TodoFormState {
    form: Todo.TodoForm;
    actions: {
      setForm: (form: Partial<Todo.TodoForm>) => void;
      resetForm: () => void;
    };
  }

  export interface TodoStoreState {
    todos: Todo.TodoItem[];
    actions: {
      addTodo: (todo: Todo.TodoItem) => void;
      removeTodo: (todoId: string) => void;
    };
  }

  export interface TabStoreState {
    activeTab: Todo.TodoTab;
    actions: {
      setTab: (tab: Todo.TodoTab) => void;
    };
  }
}
