import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import {
  createData,
  fetchData,
  softDeleteData,
} from "@/hooks/api/commonApiHandlers/useApihandler";
import { QUERY_KEYS } from "@/api/queryKeys";

interface ProjectsResponse {
  content: Project[];
}

interface Params {
  page?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  tag: string;
  ownerId: string;
  attendeeNames: string[];
}

interface CreateProjectData {
  title: string;
  description: string;
  tag: string;
  invitedTeamMembers: string[];
}

export const useProjects = (params?: Params, signal?: AbortSignal) => {
  const url = "/api/project";

  const queryKey = QUERY_KEYS.projects.default(params);

  const query = useSuspenseQuery<ProjectsResponse>({
    queryKey,
    queryFn: () => fetchData<ProjectsResponse>(url, params, signal),
  });

  return query;
};

export const useCreateProject = () => {
  const url = "/api/project";

  const mutation = useMutation({
    mutationFn: (data: CreateProjectData) => createData(url, data),
  });

  return mutation;
};

export const useDeleteProject = (projectId: string) => {
  const url = `/api/project/${projectId}`;

  const mutation = useMutation({
    mutationFn: () => softDeleteData(url),
  });

  return mutation;
};
