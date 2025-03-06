import { useConversationFlow } from "@/hooks/api/chat/useConversationFlow";
import { getModeColors } from "@/utils/chat/messageUtils";
import { renderMessageItem } from "@/components/chatInterface/messages/RenderMessageItems";
import {
  useChatInteractionStore,
  useChatResponseStore,
} from "@/store/chat/chatSessionStore";
import { AiDnaLoader } from "@/components/ui/loading/AiDnaLoader";
import { useEffect, useRef } from "react";

interface ChatMessagesProps {
  isCommandMode: boolean;
  isLoading: boolean;
}

export default function ChatMessages({
  isCommandMode,
  isLoading,
}: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages } = useChatInteractionStore();
  const { responses } = useChatResponseStore();

  const conversationFlow = useConversationFlow(messages, responses);
  const colors = getModeColors(isCommandMode);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversationFlow]);

  return (
    <div
      className={`h-96 w-full overflow-y-auto p-4 scrollbar-hide ${colors.bg} ${colors.text}`}
    >
      {isLoading ? (
        <AiDnaLoader />
      ) : (
        conversationFlow.map((message, index) => (
          <div key={`message-${index}`}>{renderMessageItem(message)}</div>
        ))
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
