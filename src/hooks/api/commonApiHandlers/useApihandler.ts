import { defaultParams } from "@/utils/common/constans";
import { apiClient, openaiClient } from "@/api/apiClient";

interface Params {
  page?: string;
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

export async function hardDeleteData<T>(url: string): Promise<T> {
  const response = await apiClient.delete<T>({ url });
  return response;
}

export async function sendOpenAiMessage(data: OpenAiReq.OpenAIPayload) {
  const request = {
    model: import.meta.env.VITE_OPENAI_MODEL || "gpt-4",
    messages: [
      {
        role: "user",
        content: data.content,
      },
    ],
  };

  const response = await openaiClient.post("/chat/completions", request);
  return response.data.choices[0].message.content;
}
