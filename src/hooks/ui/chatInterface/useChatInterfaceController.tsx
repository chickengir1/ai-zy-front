import { ReactNode } from "react";
import { HiChatAlt } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { ToolClassesStyles } from "@/utils/styles/globalStyeld";
import ChatInterface from "@/components/chatInterface/ChatInterface";
import { useToggle } from "@/hooks/utility/useToggle";
import { useKeyPress } from "@/hooks/ui/chatInterface/useKeyPress";

interface ChatInterfaceReturn {
  isChatOpen: boolean;
  toggleChat: () => void;
  renderChatInterface: () => ReactNode;
  renderChatButton: () => ReactNode;
}

export function useChatInterfaceController(
  targetKey = "i"
): ChatInterfaceReturn {
  const [isChatOpen, toggleChat] = useToggle(false);

  useKeyPress({
    targetKey,
    callback: () => toggleChat(),
  });

  function renderChatInterface() {
    return isChatOpen && <ChatInterface onClose={toggleChat} />;
  }

  function renderChatButton() {
    return (
      <button
        onClick={toggleChat}
        className={twMerge(ToolClassesStyles.base, ToolClassesStyles.chat)}
      >
        <HiChatAlt className={ToolClassesStyles.icon} />
      </button>
    );
  }

  return {
    isChatOpen,
    toggleChat,
    renderChatInterface,
    renderChatButton,
  };
}
