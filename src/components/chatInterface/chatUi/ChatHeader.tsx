import { FaTimesCircle } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoMdBuild } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { getModeColors } from "@/utils/chat/messageUtils";
import ToggleSwitch from "@/components/chatInterface/chatUi/ToggleSwitch";

interface ChatHeaderProps {
  isCommandMode: boolean;
  toggleMode: () => void;
  onClose: () => void;
}

export default function ChatHeader({
  isCommandMode,
  toggleMode,
  onClose,
}: ChatHeaderProps) {
  const colors = getModeColors(isCommandMode);

  const iconClass = isCommandMode ? "text-white" : "text-gray-600";
  const titleText = isCommandMode ? "명령모드" : "채팅모드";
  const closeIconClass = isCommandMode ? "text-white" : "text-red-500";

  function handleToggleMode() {
    toggleMode();
  }

  return (
    <div
      className={`flex items-center justify-between border-b p-4 ${colors.border}`}
    >
      <div className="flex items-center space-x-2">
        {isCommandMode ? (
          <IoMdBuild className={twMerge(iconClass)} />
        ) : (
          <FaMessage className={twMerge(iconClass)} />
        )}
        <h2 className={twMerge("text-lg font-semibold", colors.text)}>
          {titleText}
        </h2>
      </div>
      <label className="relative inline-flex cursor-pointer select-none items-center">
        <ToggleSwitch
          isCommandMode={isCommandMode}
          toggleMode={handleToggleMode}
        />
        <button onClick={onClose}>
          <FaTimesCircle size={24} className={closeIconClass} />
        </button>
      </label>
    </div>
  );
}
