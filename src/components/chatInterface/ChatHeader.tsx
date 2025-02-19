import { IoMdBuild } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";

interface ChatHeaderProps {
  isCommandMode: boolean;
  toggleMode: () => void;
  colors: {
    bg: string;
    text: string;
    border: string;
  };
  onClose: () => void;
}

export function ChatHeader({
  isCommandMode,
  toggleMode,
  colors,
  onClose,
}: ChatHeaderProps) {
  return (
    <div
      className={`flex items-center justify-between border-b p-4 ${colors.border}`}
    >
      <div className="flex items-center space-x-2">
        {isCommandMode ? (
          <IoMdBuild className="text-white" />
        ) : (
          <FaMessage className="text-gray-600" />
        )}
        <h2 className={`text-lg font-semibold ${colors.text}`}>
          {isCommandMode ? "명령모드" : "채팅모드"}
        </h2>
      </div>
      <label className="relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isCommandMode}
          onChange={toggleMode}
          className="sr-only"
        />
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isCommandMode ? "bg-[#2DE045]" : "bg-[#CCCCCE]"
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isCommandMode ? "translate-x-[28px]" : ""
            }`}
          ></span>
        </span>
        <button onClick={onClose}>
          <FaTimesCircle
            size={24}
            className={isCommandMode ? "text-white" : "text-red-500"}
          />
        </button>
      </label>
    </div>
  );
}
