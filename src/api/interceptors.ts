import {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

// TODO : 나중에 구체적으로바꿔야댐
export function setupInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use((config) => config);
}

export function requestInterceptor(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig {
  return config;
}

export function requestErrorInterceptor(
  error: AxiosError
): Promise<AxiosError> {
  return Promise.reject(error);
}

export function responseInterceptor(response: AxiosResponse) {
  return response;
}

// TODO : 토큰 만료 시 갱신 로직 작성
export function responseErrorInterceptor(error: AxiosError) {
  return Promise.reject(error);
}
