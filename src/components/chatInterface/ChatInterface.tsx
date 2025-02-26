import { getModeColors } from "@/utils/helpers/messageUtils";
import { useToggle } from "@/hooks/utility/useToggle";
import { useChatMessages } from "@/hooks/ui/chatInterface/useChatMessages";
import ChatMessages from "@/components/chatInterface/messages/ChatMessages";
import ChatHeader from "@/components/chatInterface/ChatHeader";
import ChatInputBar from "@/components/chatInterface/ChatInputBar";
import { useParams } from "react-router-dom";

interface ChatInterfaceProps {
  onClose: () => void;
}

export default function ChatInterface({ onClose }: ChatInterfaceProps) {
  const [isCommandMode, toggleMode] = useToggle(false);
  const { id } = useParams();
  const proceedingId = id ?? "";
  const { handlers } = useChatMessages(proceedingId);
  const { handleFormSubmit } = handlers;

  const colors = getModeColors(isCommandMode);

  return (
    <div className="fixed bottom-16 right-0 z-50 flex items-center justify-center p-4">
      <div className="w-full md:w-[576px] md:max-w-xl">
        <div className={`overflow-hidden rounded-md shadow-lg ${colors.bg}`}>
          <ChatHeader
            isCommandMode={isCommandMode}
            toggleMode={toggleMode}
            onClose={onClose}
          />
          <ChatMessages isCommandMode={isCommandMode} />
          <form
            onSubmit={handleFormSubmit(isCommandMode)}
            className={`border-t p-4 ${colors.border}`}
          >
            <ChatInputBar isCommandMode={isCommandMode} />
          </form>
        </div>
      </div>
    </div>
  );
}
