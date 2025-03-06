import { useChatFormSubmit } from "@/hooks/business/chatInterface/useChatFormSubmit";
import {
  useChatInteractionActions,
  useChatResponseActions,
} from "@/store/chat/chatSessionStore";

export function useChatMessages(projectId: string) {
  const { responses, isLoading } = useChatResponseActions();

  const { messages, input, actions } = useChatInteractionActions();
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
      responses,
      isLoading,
    },
    handlers: {
      handleInputChange,
      handleFormSubmit,
    },
  };
}
