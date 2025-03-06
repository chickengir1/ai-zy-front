import ChatMessageItem from "@/components/chatInterface/messages/ChatMessageItem";
import CommandMessageItem from "@/components/chatInterface/messages/CommandMessageItem";

export function renderMessageItem(message: Chat.Message) {
  const isUser = message.sender === "user";

  const formattedMessage: Chat.Message = {
    ...message,
    rawCommand: message.rawCommand.replace(/\\n/g, "\n"),
  };

  const messageContent =
    formattedMessage.type === "command" ? (
      <CommandMessageItem message={formattedMessage} />
    ) : (
      <ChatMessageItem message={formattedMessage} />
    );

  return (
    <div className={`mb-2 ${isUser ? "text-right" : "text-left"}`}>
      <div className="inline-block max-w-[60%] whitespace-pre-wrap break-words break-all text-start">
        {messageContent}
      </div>
    </div>
  );
}
