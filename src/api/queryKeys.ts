export const QUERY_KEYS = {
  // 유저 쿼리 키 예시
  user: {
    base: ["user"] as const,
    detail: (params: string) =>
      [...QUERY_KEYS.user.base, "detail", params] as const,
  },
};
