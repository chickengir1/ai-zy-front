export const QUERY_KEYS = {
  user: {
    base: ["user"] as const,
    detail: (id: number) =>
      [...QUERY_KEYS.user.base, "detail", String(id)] as const,
    list: (params?: Record<string, unknown>) =>
      [...QUERY_KEYS.user.base, "list", params] as const,
  },
} as const;
