type ParamsObj = {
  page?: string;
  limit?: string;
};

export const QUERY_KEYS = {
  invite: {
    base: ["invite"] as const,
    sendMail: ["invite", "send-mail"] as const,
    deleteMail: (mail: string) => ["invite", "delete-mail", mail] as const,
  },

  projects: {
    base: ["project"] as const,
    default: (params?: ParamsObj) =>
      [...QUERY_KEYS.projects.base, params] as const,

    proceedings: {
      base: (projectId: string, params?: ParamsObj) =>
        [
          ...QUERY_KEYS.projects.base,
          "proceedings",
          projectId,
          params,
        ] as const,
      detail: (projectId: string, proceedingId: string) =>
        [
          ...QUERY_KEYS.projects.base,
          "proceedings",
          projectId,
          proceedingId,
        ] as const,
    },

    todos: {
      base: (projectId: string) =>
        [...QUERY_KEYS.projects.base, "todos", projectId] as const,
    },
  },
} as const;

export type QueryKeys = typeof QUERY_KEYS;
