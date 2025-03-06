type ParamsObj = {
  page?: string;
};

export const QUERY_KEYS = {
  projects: {
    base: ["project"] as const,
    default: (params?: ParamsObj) =>
      [...QUERY_KEYS.projects.base, params] as const,
  },

  proceedings: {
    base: (projectId: string, params?: ParamsObj) =>
      [...QUERY_KEYS.projects.base, "proceedings", projectId, params] as const,
    detail: (projectId: string, proceedingId: string) =>
      [
        ...QUERY_KEYS.projects.base,
        "proceedings",
        projectId,
        proceedingId,
      ] as const,
  },

  todolist: {
    base: (projectId: string, params?: ParamsObj) =>
      [...QUERY_KEYS.projects.base, projectId, "todolist", params] as const,
  },
} as const;

export type QueryKeys = typeof QUERY_KEYS;
