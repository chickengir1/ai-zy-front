import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import {
  createData,
  fetchData,
  fetchDetailData,
  softDeleteData,
  updateData,
} from "@/hooks/api/commonApiHandlers/useApihandler";
import { QUERY_KEYS } from "@/api/queryKeys";

export interface ProceedingsResponse {
  content: ProceedingItem[];
}

export interface ProceedingItem {
  proceedingsId: string;
  title: string;
  contents: string;
  attendeeNames: string[];
  tags: string;
  createdAt: string;
}

interface Params {
  page?: string;
}

interface CreateProceedingData {
  title: string;
  contents: string;
  tags: string;
  attendees: string[];
  createdAt: string;
}

interface ProceedingDetailResponse {
  proceedingsId: string;
  title: string;
  contents: string;
  attendeeNames: string[];
  tags: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export const useProceedings = (
  projectId: string,
  params?: Params,
  signal?: AbortSignal
) => {
  const url = `/api/projects/${projectId}/proceedings`;

  const queryKey = QUERY_KEYS.proceedings.base(projectId, params);

  const query = useSuspenseQuery<ProceedingsResponse>({
    queryKey,
    queryFn: () => fetchData<ProceedingsResponse>(url, params, signal),
  });

  return query;
};

export const useProceedingsDetail = (
  projectId: string,
  proceedingId: string
) => {
  const url = `/api/projects/${projectId}/proceedings/${proceedingId}`;

  const queryKey = QUERY_KEYS.proceedings.detail(projectId, proceedingId);

  const query = useSuspenseQuery<ProceedingDetailResponse>({
    queryKey,
    queryFn: () => fetchDetailData<ProceedingDetailResponse>(url),
  });

  return query;
};

export const useCreateProceeding = (projectId: string) => {
  const url = `/api/projects/${projectId}/proceedings`;

  const mutation = useMutation({
    mutationFn: (data: CreateProceedingData) => createData(url, data),
  });

  return mutation;
};

export const useUpdateProceeding = (
  projectId: string,
  proceedingId: string
) => {
  const url = `/api/projects/${projectId}/proceedings/${proceedingId}`;

  const mutation = useMutation({
    mutationFn: (data: CreateProceedingData) => updateData(url, data),
  });

  return mutation;
};

export const useDeleteProceeding = (
  projectId: string,
  proceedingId: string
) => {
  const url = `/api/projects/${projectId}/proceedings/${proceedingId}/delete`;

  const mutation = useMutation({
    mutationFn: () => softDeleteData(url),
  });

  return mutation;
};
