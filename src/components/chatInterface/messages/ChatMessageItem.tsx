import { getMessageStyle } from "@/utils/helpers/messageUtils";

interface ChatMessageItemProps {
  message: Chat.Message;
}

export default function ChatMessageItem({ message }: ChatMessageItemProps) {
  return (
    <div
      className={`whitespace-pre-wrap rounded-md p-2 ${getMessageStyle(
        message.sender === "user"
      )}`}
    >
      {message.rawCommand}
    </div>
  );
}
