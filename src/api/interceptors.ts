import {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { determineErrorType, handleAuthIfNeeded } from "./errorHandler";

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

export function requestInterceptor(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig {
  // TODO: 요청 전 공통 처리
  // 토큰 추가 예상 코드
  // const token = getToken();
  // if (token) {
  //   config.headers = config.headers || {};
  //   config.headers["Authorization"] = `Bearer ${token}`;
  // }
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
  const { data } = response;
  console.log("데이터 반환 값", data);
  return data;
}

export function responseErrorInterceptor(error: AxiosError) {
  const apiError = determineErrorType(error);
  handleAuthIfNeeded(apiError);
  return Promise.reject(apiError);
}
