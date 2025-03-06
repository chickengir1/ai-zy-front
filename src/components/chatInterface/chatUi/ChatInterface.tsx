import { useChatMessages } from "@/hooks/business/chatInterface/useChatMessages";
import { useParamsId } from "@/hooks/utility/common/useParams";
import { useToggle } from "@/hooks/utility/toggle/useToggle";
import { getModeColors } from "@/utils/chat/messageUtils";
import ChatHeader from "@/components/chatInterface/chatUi/ChatHeader";
import ChatInputBar from "@/components/chatInterface/chatUi/ChatInputBar";
import ChatMessages from "@/components/chatInterface/messages/ChatMessages";

interface ChatInterfaceProps {
  onClose: () => void;
}

export default function ChatInterface({ onClose }: ChatInterfaceProps) {
  const [isCommandMode, toggleMode] = useToggle(false);
  const proceedingId = useParamsId();
  const { handlers, chatState } = useChatMessages(proceedingId);
  const { handleFormSubmit } = handlers;
  const { isLoading } = chatState;

  const colors = getModeColors(isCommandMode);

  return (
    <div className="fixed bottom-16 right-0 z-50 flex w-full items-end justify-end p-4 sm:w-auto">
      <div className="w-full sm:w-[576px] sm:max-w-[576px]">
        <div className={`overflow-hidden rounded-md shadow-lg ${colors.bg}`}>
          <ChatHeader
            isCommandMode={isCommandMode}
            toggleMode={toggleMode}
            onClose={onClose}
          />
          <ChatMessages isCommandMode={isCommandMode} isLoading={isLoading} />
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
