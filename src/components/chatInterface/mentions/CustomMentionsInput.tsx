import { useRef } from "react";
import { useChatMessages } from "@/hooks/business/chatInterface/useChatMessages";
import { useCustomMentions } from "@/hooks/business/chatInterface/useCustomMentions";
import { useParamsId } from "@/hooks/utility/common/useParams";
import { useKeyboardNavigation } from "@/hooks/utility/navigation/useKeyboardNavigation";
import { shouldShowMentionList } from "@/utils/chat/mentionUtils";
import { getModeColors } from "@/utils/chat/messageUtils";
import MentionList from "@/components/chatInterface/mentions/MentionList";

interface CustomMentionsInputProps {
  isCommandMode: boolean;
}

export default function CustomMentionsInput({
  isCommandMode,
}: CustomMentionsInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const proceedingId = useParamsId();

  const { chatState } = useChatMessages(proceedingId);
  const { input } = chatState;

  const { mentionState, handlers } = useCustomMentions();
  const { activeQuery, filteredItems } = mentionState;
  const { handleChange } = handlers;

  const { activeItems, keyboardHandlers } = useKeyboardNavigation();
  const { selectedIndex } = activeItems;
  const { handleKeyDown, createKeyboardHandler } = keyboardHandlers;

  const colors = getModeColors(isCommandMode);

  return (
    <div className="relative flex-grow">
      <input
        autoFocus
        ref={inputRef}
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={createKeyboardHandler(handleKeyDown)}
        placeholder="메시지를 입력하세요..."
        className={`w-full rounded border p-2 ${colors.bg} ${colors.text} ${colors.placeholder}`}
      />
      {shouldShowMentionList(activeQuery, filteredItems()) && (
        <MentionList items={filteredItems()} selectedIndex={selectedIndex} />
      )}
    </div>
  );
}
