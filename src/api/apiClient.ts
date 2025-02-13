import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
  setupInterceptors,
  requestInterceptor,
  responseInterceptor,
} from "./interceptors";

export interface RequestConfig<T = unknown> extends AxiosRequestConfig {
  url: string;
  data?: T;
  params?: Record<string, string>;
}

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "",
  headers: { "Content-Type": "application/json" },
});

setupInterceptors(axiosInstance);
axiosInstance.interceptors.request.use(requestInterceptor);
axiosInstance.interceptors.response.use(responseInterceptor);

export const apiClient = {
  get: <T>(config: RequestConfig) =>
    axiosInstance.get<T>(config.url, config).then((res) => res.data),

  post: <T>(config: RequestConfig) =>
    axiosInstance
      .post<T>(config.url, config.data, config)
      .then((res) => res.data),

  put: <T>(config: RequestConfig) =>
    axiosInstance
      .put<T>(config.url, config.data, config)
      .then((res) => res.data),

  patch: <T>(config: RequestConfig) =>
    axiosInstance
      .patch<T>(config.url, config.data, config)
      .then((res) => res.data),

  delete: <T>(config: RequestConfig) =>
    axiosInstance.delete<T>(config.url, config).then((res) => res.data),
} as const;

// 사용 예시
// const getConfig: RequestConfig = {
//   url: "/users",
//   params: {
//     page: 1,
//     limit: 10,
//   },
// };

// const postConfig: RequestConfig = {
//     url: '/users',
//     data: {
//       name: 'users',
//       email: 'users@example.com',
//     },
//   };
