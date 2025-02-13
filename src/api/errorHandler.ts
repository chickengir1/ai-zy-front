import axios from "axios";

export interface ApiError {
  code: string;
  message: string;
  status: number;
}

type NonEmptyResponse = Exclude<unknown, null | undefined>;

// overload 1
export function handleApiCall<T extends NonEmptyResponse>(
  apiCall: Promise<T>
): Promise<T>;

// overload 2
export function handleApiCall<T extends NonEmptyResponse, E>(
  apiCall: Promise<T>,
  onError: (error: ApiError) => E
): Promise<T | E>;

export function handleApiCall<T extends NonEmptyResponse, E>(
  apiCall: Promise<T>,
  onError?: (error: ApiError) => E
): Promise<T | E> {
  return apiCall.catch((error: unknown) => {
    if (!axios.isAxiosError(error)) {
      throw error;
    }

    const apiError: ApiError = {
      code: error.response?.data?.code || "알 수 없는 에러 발생",
      message: error.response?.data?.message || error.message,
      status: error.response?.status || 500,
    };

    if (error.response?.status === 401) {
      // TODO : 인증 에러 처리
      // authStore.getState().logout();
    }

    return onError ? onError(apiError) : Promise.reject(apiError);
  });
}
