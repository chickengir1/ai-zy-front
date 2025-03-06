import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import {
  createData,
  fetchData,
  softDeleteData,
} from "@/hooks/api/commonApiHandlers/useApihandler";
import { QUERY_KEYS } from "@/api/queryKeys";

interface Params {
  page?: string;
}

interface TodolistResponse {
  content: Todolist[];
}

export interface Todolist {
  id: string;
  title: string;
  state: string;
  assigneeName: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export const useTodolist = (projectId: string, params?: Params) => {
  const url = `/api/projects/${projectId}/todos`;

  const query = useSuspenseQuery<TodolistResponse>({
    queryKey: QUERY_KEYS.todolist.base(projectId, params),
    queryFn: () => fetchData<TodolistResponse>(url, params),
  });

  return query;
};

export const useCreateTodolist = (
  projectId: string,
  onSuccess?: (data: Todolist) => void
) => {
  const url = `/api/projects/${projectId}/todo`;

  const mutation = useMutation({
    mutationFn: (data: Todolist) => createData(url, data),
    onSuccess,
  });

  return mutation;
};

export const useDeleteTodolist = (
  projectId: string,
  todoId: string,
  onSuccess?: () => void
) => {
  const url = `/api/projects/${projectId}/todos/${todoId}/delete`;

  const mutation = useMutation({
    mutationFn: () => softDeleteData(url),
    onSuccess,
  });

  return mutation;
};
