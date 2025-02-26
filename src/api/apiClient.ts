import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { setupInterceptors } from "@/api/interceptors";
import { ApiError } from "@/api/errorHandler";

export interface RequestConfig<T = unknown> extends AxiosRequestConfig {
  url: string;
  data?: T;
  params?: Record<string, string>;
}

export interface ApiResponse<T> {
  result: {
    data: T;
    status: number;
    statusText: string;
  };
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
}

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

setupInterceptors(axiosInstance);

export const apiClient = {
  get: <T>(config: RequestConfig) =>
    axiosInstance
      .get<T>(config.url, config)
      .then((res) => res.data)
      .catch((error) => {
        throw error as ApiError;
      }),

  post: <T>(config: RequestConfig) =>
    axiosInstance
      .post<T>(config.url, config.data, config)
      .then((res) => res.data)
      .catch((error) => {
        throw error as ApiError;
      }),

  put: <T>(config: RequestConfig) =>
    axiosInstance
      .put<T>(config.url, config.data, config)
      .then((res) => res.data)
      .catch((error) => {
        throw error as ApiError;
      }),

  patch: <T>(config: RequestConfig) =>
    axiosInstance
      .patch<T>(config.url, config.data, config)
      .then((res) => res.data)
      .catch((error) => {
        throw error as ApiError;
      }),

  delete: <T>(config: RequestConfig) =>
    axiosInstance
      .delete<T>(config.url, config)
      .then((res) => res.data)
      .catch((error) => {
        throw error as ApiError;
      }),
} as const;
