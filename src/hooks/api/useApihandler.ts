import { apiClient } from "@/api/apiClient";
import { defaultParams } from "@/utils/constants";

interface Params {
  page?: string;
  limit?: string;
}

export async function fetchData<T>(
  url: string,
  params?: Params,
  signal?: AbortSignal
): Promise<T> {
  const queryParams = { ...defaultParams, ...params };
  return apiClient.get<T>({ url, params: queryParams, signal });
}

export async function fetchDetailData<T>(
  url: string,
  signal?: AbortSignal
): Promise<T> {
  return apiClient.get<T>({ url, signal });
}

export async function createData<T>(url: string, data: T): Promise<T> {
  const response = await apiClient.post<T>({ url, data });

  return response;
}

export async function updateData<T>(url: string, data: T): Promise<T> {
  const response = await apiClient.put<T>({ url, data });
  return response;
}

export async function softDeleteData<T>(url: string): Promise<T> {
  const response = await apiClient.put<T>({ url });
  return response;
}
