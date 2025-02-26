import { IoIosSend } from "react-icons/io";
import CustomMentionsInput from "@/components/chatInterface/CustomMentionsInput";
import { getModeColors } from "@/utils/helpers/messageUtils";
import { useChatMessages } from "@/hooks/ui/chatInterface/useChatMessages";
import { useParams } from "react-router-dom";

export default function ChatInputBar({ isCommandMode }: Chat.ChatProps) {
  const { id } = useParams();
  const proceedingId = id ?? "";

  const { chatState, handlers } = useChatMessages(proceedingId);
  const { input } = chatState;
  const { handleInputChange } = handlers;

  const colors = getModeColors(isCommandMode);

  const nomalButton = "bg-indigo-600 text-white";
  const commandButton = "bg-gray-200";

  const buttonClass = isCommandMode ? commandButton : nomalButton;

  return (
    <div className="flex space-x-2">
      {isCommandMode ? (
        <CustomMentionsInput isCommandMode={isCommandMode} />
      ) : (
        <input
          autoFocus
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="메시지를 입력하세요..."
          className={`flex-grow rounded border p-2 ${colors.bg} ${colors.text} ${colors.placeholder}`}
        />
      )}
      <button
        type="submit"
        className={`rounded px-4 py-2 text-sm ${buttonClass}`}
      >
        <IoIosSend size={24} />
      </button>
    </div>
  );
}
