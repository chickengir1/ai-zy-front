import { useMutation } from "@tanstack/react-query";
import {
  createData,
  sendOpenAiMessage,
} from "@/hooks/api/commonApiHandlers/useApihandler";

export const useCreateAiMessageForServer = () => {
  const url = "/api/ai";

  const mutation = useMutation({
    mutationFn: (data: Chat.ChatSubmissionData) => createData(url, data),
  });

  return mutation;
};

export const useCreateOpenAiMessage = () => {
  const mutation = useMutation({
    mutationFn: (data: OpenAiReq.OpenAIPayload) => sendOpenAiMessage(data),
  });

  return mutation;
};
