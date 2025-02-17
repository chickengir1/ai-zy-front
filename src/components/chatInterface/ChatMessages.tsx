import { getMessageStyle } from "@/utils/helpers/chatUtils";

interface ChatMessagesProps {
  messages: { id: number; role: "user" | "bot"; content: string }[];
  isCommandMode: boolean;
  colors: {
    bg: string;
    text: string;
  };
}

export function ChatMessages({
  messages,
  isCommandMode,
  colors,
}: ChatMessagesProps) {
  return (
    <div className={`h-96 overflow-y-auto p-4 ${colors.bg} ${colors.text}`}>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}
        >
          <span
            className={`inline-block max-w-[60%] whitespace-pre-wrap rounded-md px-2 py-1 text-start ${getMessageStyle(message.role, isCommandMode)}`}
          >
            {message.content}
          </span>
        </div>
      ))}
    </div>
  );
}
