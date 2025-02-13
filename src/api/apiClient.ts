import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { setupInterceptors } from "./interceptors";

export interface RequestConfig<T = unknown> extends AxiosRequestConfig {
  url: string;
  data?: T;
  params?: Record<string, string>;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
}

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 5000,
});

setupInterceptors(axiosInstance);

export const apiClient = {
  get: <T>(config: RequestConfig) =>
    axiosInstance
      .get<ApiResponse<T>>(config.url, config)
      .then((res) => res.data),

  post: <T>(config: RequestConfig) =>
    axiosInstance
      .post<ApiResponse<T>>(config.url, config.data, config)
      .then((res) => res.data),

  put: <T>(config: RequestConfig) =>
    axiosInstance
      .put<ApiResponse<T>>(config.url, config.data, config)
      .then((res) => res.data),

  patch: <T>(config: RequestConfig) =>
    axiosInstance
      .patch<ApiResponse<T>>(config.url, config.data, config)
      .then((res) => res.data),

  delete: <T>(config: RequestConfig) =>
    axiosInstance
      .delete<ApiResponse<T>>(config.url, config)
      .then((res) => res.data),
} as const;
