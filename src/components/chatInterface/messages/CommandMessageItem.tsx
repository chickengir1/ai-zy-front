import { getMessageStyle } from "@/utils/helpers/messageUtils";

interface CommandMessageItemProps {
  message: Chat.Message;
}

export default function CommandMessageItem({
  message,
}: CommandMessageItemProps) {
  return (
    <div
      className={`whitespace-pre-wrap rounded-md p-2 ${getMessageStyle(
        message.sender === "user"
      )}`}
    >
      <div className="flex space-x-2">
        <span className="rounded bg-indigo-100 px-2 py-1 text-indigo-700">
          {message.action}
        </span>
        <span className="rounded bg-green-100 px-2 py-1 text-green-700">
          {message.tag}
        </span>
      </div>
      <span className="py-2">{message.rawCommand.trim()}</span>
    </div>
  );
}
