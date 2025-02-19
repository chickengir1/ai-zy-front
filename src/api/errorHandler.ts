import axios, { AxiosError, AxiosRequestConfig } from "axios";

// TODO: 로그아웃 처리 해야함

export interface ApiError {
  code: string;
  message: string;
  status: number;
}

interface ErrorResponse extends AxiosError {
  code: string;
  message: string;
}

export function apiRequest<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T | ApiError> {
  return axios({ url, ...config })
    .then((response) => response.data as T)
    .catch((error) => {
      const apiError = determineErrorType(error);
      handleAuthIfNeeded(apiError);
      return apiError;
    });
}

export function determineErrorType(error: unknown): ApiError {
  if (axios.isAxiosError(error)) {
    return handleAxiosError(error);
  }
  return handleUnknownError(error);
}

export function handleAuthIfNeeded(apiError: ApiError): void {
  if (apiError.status === 401 || apiError.status === 403) {
    handleAuthError(apiError);
  }
}

function handleAuthError(error: ApiError) {
  if (error.status === 401) {
    console.error("인증이 만료되었습니다. 다시 로그인해주세요.");
    // authStore.getState().logout();
  } else if (error.status === 403) {
    console.error("접근 권한이 없습니다.");
  }
}

function handleAxiosError(error: AxiosError<ErrorResponse>): ApiError {
  return {
    code: error.response?.data?.code || "UNKNOWN_ERROR",
    message: error.response?.data?.message || error.message,
    status: error.response?.status || 500,
  };
}

function handleUnknownError(error: unknown): ApiError {
  console.error("알 수 없는 오류", error);
  return {
    code: "UNKNOWN_ERROR",
    message: "알 수 없는 오류가 발생했습니다.",
    status: 500,
  };
}
