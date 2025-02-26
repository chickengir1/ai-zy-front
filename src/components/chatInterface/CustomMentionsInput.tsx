import { useRef } from "react";
import MentionList from "@/components/chatInterface/MentionList";
import { shouldShowMentionList } from "@/utils/helpers/mentionUtils";
import { useKeyboardNavigation } from "@/hooks/ui/chatInterface/useKeyboardNavigation";
import { getModeColors } from "@/utils/helpers/messageUtils";
import { useChatMessages } from "@/hooks/ui/chatInterface/useChatMessages";
import { useCustomMentions } from "@/hooks/ui/chatInterface/useCustomMentions";
import { useParams } from "react-router-dom";

export default function CustomMentionsInput({ isCommandMode }: Chat.ChatProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { id } = useParams();
  const proceedingId = id ?? "";

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
