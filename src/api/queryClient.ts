import { QueryClient } from "@tanstack/react-query";
import { apiClient, ApiResponse } from "./apiClient";

interface QueryFnParams {
  queryKey: readonly unknown[];
  signal: AbortSignal;
}

function createQueryFn<T>() {
  return async ({
    queryKey,
    signal,
  }: QueryFnParams): Promise<ApiResponse<T>> => {
    const [endpoint, ...params] = queryKey;
    const url = typeof endpoint === "string" ? endpoint : "";
    const queryParams =
      params.length > 0 ? (params[0] as Record<string, string>) : undefined;

    return apiClient.get<T>({
      url,
      params: queryParams,
      signal,
    });
  };
}

function createRetryFn() {
  return (failureCount: number, error: unknown) => {
    if (error instanceof Error && "status" in error && error.status === 404) {
      return false;
    }
    return failureCount < 3;
  };
}

function createOnErrorFn() {
  return (error: unknown) => {
    if (error instanceof Error && "message" in error) {
      throw new Error(error.message);
    }
  };
}

const defaultQueryOptions = {
  queryFn: createQueryFn<unknown>(),
  retry: createRetryFn(),
  gcTime: 1000 * 60 * 5,
  refetchOnWindowFocus: false,
  throwOnError: true,
};

const defaultMutationOptions = {
  onError: createOnErrorFn(),
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: defaultQueryOptions,
    mutations: defaultMutationOptions,
  },
});
