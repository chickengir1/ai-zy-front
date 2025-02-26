import {
  useChatMessageActions,
  useChatResponseActions,
} from "@/store/chatStore";
import { getModeColors } from "@/utils/helpers/messageUtils";
import { useConversationFlow } from "@/hooks/api/chat/useConversationFlow";
import { renderMessageItem } from "@/components/chatInterface/messages/RenderMessageItems";

export default function ChatMessages({ isCommandMode }: Chat.ChatProps) {
  const { messages } = useChatMessageActions();
  const { chatResponses } = useChatResponseActions();

  const conversationFlow = useConversationFlow(messages, chatResponses);

  const colors = getModeColors(isCommandMode);

  return (
    <div className={`h-96 overflow-y-auto p-4 ${colors.bg} ${colors.text}`}>
      {conversationFlow.map((message, index) => (
        <div key={`message-${index}`}>{renderMessageItem(message)}</div>
      ))}
    </div>
  );
}
