import { useToast } from "@/providers/toast/ToastProvider";
import { useCreateAiMessageForServer } from "@/hooks/api/chat/useChat";
import {
  useChatInteractionActions,
  useChatResponseActions,
} from "@/store/chat/chatSessionStore";
import {
  createCommandMessage,
  createNormalMessage,
} from "@/utils/chat/messageUtils";
import { useCreateOpenAiMessage } from "@/hooks/api/chat/useChat";

interface ChatResponse {
  createdAt: string;
  response: string;
}

export function useChatFormSubmit(projectId: string) {
  const { input, actions: chatInteractionActions } =
    useChatInteractionActions();
  const { addMessage, resetInput } = chatInteractionActions;

  const { actions: chatResponseActions } = useChatResponseActions();
  const { addResponse, setIsLoading } = chatResponseActions;

  const { mutateAsync: createChat } = useCreateAiMessageForServer();
  const { mutateAsync: sendOpenAiMessage } = useCreateOpenAiMessage();

  const { showError } = useToast();

  function createMessageFromInput(input: string, isCommand: boolean) {
    return isCommand ? createCommandMessage(input) : createNormalMessage(input);
  }

  function handlePayload(isCommand: boolean) {
    const newMessage = createMessageFromInput(input, isCommand);

    if (!input.trim()) return;

    if (!newMessage) return;

    const serverPayload = {
      action: newMessage.actionId,
      projectId: projectId,
      tag: newMessage.tagId,
      rawCommand: newMessage.rawCommand,
    };

    const openAiPayload = {
      content: newMessage.rawCommand,
    };

    return { serverPayload, openAiPayload };
  }

  function handleChatResponse(response: unknown) {
    const responseType =
      typeof response === "string" ? response : JSON.stringify(response);

    const newResponse: ChatResponse = {
      createdAt: new Date().toISOString(),
      response: responseType,
    };
    addResponse(newResponse);
  }

  async function handleChatForm(isCommand: boolean) {
    const newMessage = createMessageFromInput(input, isCommand);
    const result = handlePayload(isCommand);

    if (!result || !newMessage) return;

    const { serverPayload, openAiPayload } = result;

    addMessage(newMessage);
    resetInput();
    setIsLoading(true);

    if (isCommand) {
      createChat(serverPayload as Chat.ChatSubmissionData)
        .then(handleChatResponse)
        .catch((error: Error) => showError(error.message))
        .finally(() => setIsLoading(false));
      return;
    }

    if (!isCommand) {
      sendOpenAiMessage(openAiPayload as OpenAiReq.OpenAIPayload)
        .then(handleChatResponse)
        .catch((error: Error) => showError(error.message))
        .finally(() => setIsLoading(false));
      return;
    }
  }

  function handleFormSubmit(isCommand: boolean) {
    return (e: Event.FormEventType) => {
      e.preventDefault();
      handleChatForm(isCommand);
    };
  }

  return { handleFormSubmit };
}
