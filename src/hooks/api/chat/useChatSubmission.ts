import { useMutation } from "@tanstack/react-query";
import { createData } from "@/hooks/api/useApihandler";

export interface ChatSubmissionData {
  action: string;
  tag: string;
  rawCommand: string;
  projectId: string;
}

export const useCreateProject = () => {
  const url = "/api/ai";

  const mutation = useMutation({
    mutationFn: (data: ChatSubmissionData) => createData(url, data),
  });

  return mutation;
};
