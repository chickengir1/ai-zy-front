import { useToast } from "@/providers/ToastProvider";
import {
  useChatMessageActions,
  useChatResponseActions,
} from "@/store/chatStore";
import {
  ChatSubmissionData,
  useCreateProject,
} from "@/hooks/api/chat/useChatSubmission";
import {
  createCommandMessage,
  createNormalMessage,
} from "@/utils/helpers/messageUtils";

interface ChatResponse {
  createdAt: string;
  response: string;
}

export function useChatFormSubmit(projectId: string) {
  const { input, actions: chatMessageActions } = useChatMessageActions();
  const { addMessage, resetInput } = chatMessageActions;

  const { actions: chatResponseActions } = useChatResponseActions();
  const { addChatResponse, setIsLoading } = chatResponseActions;

  const { mutateAsync: createChat } = useCreateProject();

  const { showError } = useToast();

  function createMessageFromInput(input: string, isCommand: boolean) {
    return isCommand ? createCommandMessage(input) : createNormalMessage(input);
  }

  function handlePayload(isCommand: boolean) {
    const newMessage = createMessageFromInput(input, isCommand);
    console.log(newMessage);

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
    addChatResponse(newResponse);
  }

  async function handleChatForm(isCommand: boolean) {
    const newMessage = createMessageFromInput(input, isCommand);
    const result = handlePayload(isCommand);

    if (!result || !newMessage) return;

    const { serverPayload } = result;

    addMessage(newMessage);
    resetInput();
    setIsLoading(true);

    createChat(serverPayload as ChatSubmissionData)
      .then(handleChatResponse)
      .catch((error: Error) => showError(error.message))
      .finally(() => setIsLoading(false));

    // sendMessageToOpenAI(openAiPayload)
    //   .then((gptResponse) => {
    //   .catch((error: Error) => showError(error.message));
    //   .finally(() => setIsLoading(false));
  }

  function handleFormSubmit(isCommand: boolean) {
    return (e: Event.FormEventType) => {
      e.preventDefault();
      handleChatForm(isCommand);
    };
  }

  return { handleFormSubmit };
}
