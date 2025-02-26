import {
  useChatMessageActions,
  useChatResponseActions,
} from "@/store/chatStore";
import { useChatFormSubmit } from "@/hooks/ui/chatInterface/useChatFormSubmit";

export function useChatMessages(projectId: string) {
  const { chatResponses, isLoading } = useChatResponseActions();

  const { messages, input, actions } = useChatMessageActions();
  const { setInput } = actions;

  const { handleFormSubmit } = useChatFormSubmit(projectId);

  function handleInputChange(e: Event.InputEventType) {
    const { value } = e.target;
    setInput(value);
  }

  return {
    chatState: {
      messages,
      input,
      chatResponses,
      isLoading,
    },
    handlers: {
      handleInputChange,
      handleFormSubmit,
    },
  };
}
