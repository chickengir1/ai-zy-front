export const QUERY_KEYS = {
  users: {
    base: ["users"] as const,
    login: ["users", "login"] as const,
    logout: ["users", "logout"] as const,
  },
  invite: {
    base: ["invite"] as const,
    sendMail: ["invite", "send-mail"] as const,
    deleteMail: (mail: string) => ["invite", "delete-mail", mail] as const,
  },
  projects: {
    base: ["projects"] as const,
    list: (params?: { page?: number; limit?: number }) =>
      [...QUERY_KEYS.projects.base, "list", params] as const,
    detail: (projectId: number) =>
      [...QUERY_KEYS.projects.base, "detail", projectId] as const,
    permissions: (projectId: number) =>
      [...QUERY_KEYS.projects.base, "permissions", projectId] as const,
    proceedings: {
      base: (projectId: number) =>
        [...QUERY_KEYS.projects.base, "proceedings", projectId] as const,
      list: (projectId: number, params?: { page?: number; limit?: number }) =>
        [
          ...QUERY_KEYS.projects.proceedings.base(projectId),
          "list",
          params,
        ] as const,
      detail: (projectId: number, proceedingsId: number) =>
        [
          ...QUERY_KEYS.projects.proceedings.base(projectId),
          "detail",
          proceedingsId,
        ] as const,
    },
    todos: {
      base: (projectId: number) =>
        [...QUERY_KEYS.projects.base, "todos", projectId] as const,
      list: (projectId: number, params?: { page?: number; limit?: number }) =>
        [...QUERY_KEYS.projects.todos.base(projectId), "list", params] as const,
      detail: (projectId: number, todoId: number) =>
        [
          ...QUERY_KEYS.projects.todos.base(projectId),
          "detail",
          todoId,
        ] as const,
    },
  },
  ai: {
    base: ["ai"] as const,
  },
} as const;

export type QueryKeys = typeof QUERY_KEYS;
