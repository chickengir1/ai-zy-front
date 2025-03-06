import { IoIosSend } from "react-icons/io";
import { useParamsId } from "@/hooks/utility/common/useParams";
import { useChatMessages } from "@/hooks/business/chatInterface/useChatMessages";
import { getModeColors } from "@/utils/chat/messageUtils";
import CustomMentionsInput from "@/components/chatInterface/mentions/CustomMentionsInput";

interface ChatProps {
  isCommandMode: boolean;
}

export default function ChatInputBar({ isCommandMode }: ChatProps) {
  const proceedingId = useParamsId();

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
          maxLength={50}
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
