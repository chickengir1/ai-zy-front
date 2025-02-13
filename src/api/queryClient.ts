import { AxiosError } from "axios";
import { QueryClient, QueryCache, MutationCache } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      refetchOnWindowFocus: false,
      throwOnError: true,
    },
  },
  queryCache: new QueryCache({}),
  mutationCache: new MutationCache({
    onError: (error) => {
      if (error instanceof AxiosError) {
        console.error(error.response?.data.message || error.message);
      } else {
        console.error(error);
      }
    },
  }),
});
