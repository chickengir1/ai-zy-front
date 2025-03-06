import {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { getFreshAccessToken } from "@/providers/auth/authConfig";
import { useAuthStore } from "@/store/utilityStore/authorizationStore";
import { determineErrorType, handleAuthIfNeeded } from "@/api/errorHandler";

export function setupInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use(
    requestInterceptor,
    requestErrorInterceptor
  );
  instance.interceptors.response.use(
    responseInterceptor,
    responseErrorInterceptor
  );
}

export async function requestInterceptor(
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> {
  let token = useAuthStore.getState().accessToken;

  if (!token) {
    try {
      token = await getFreshAccessToken();
      useAuthStore.getState().setAccessToken(token);
    } catch (error) {
      console.error(error);
      throw new Error("토큰 재발급에 실패했습니다. 로그인이 필요합니다.");
    }
  }

  config.headers.Authorization = `Bearer ${token}`;
  return config;
}

export function requestErrorInterceptor(
  error: AxiosError
): Promise<AxiosError> {
  const apiError = determineErrorType(error);
  handleAuthIfNeeded(apiError);
  return Promise.reject(apiError);
}

export function responseInterceptor(response: AxiosResponse) {
  return response;
}

export function responseErrorInterceptor(error: AxiosError) {
  const apiError = determineErrorType(error);
  handleAuthIfNeeded(apiError);
  return Promise.reject(apiError);
}
