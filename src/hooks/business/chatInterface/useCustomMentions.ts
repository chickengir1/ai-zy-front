import { useChatInteractionActions } from "@/store/chat/chatSessionStore";
import {
  getActiveQuery,
  replaceQueryInInput,
  getSymbolItemsByType,
} from "@/utils/chat/mentionUtils";

export function useCustomMentions() {
  const { input, actions } = useChatInteractionActions();
  const { setInput } = actions;

  const activeQuery = getActiveQuery(input);

  function filteredItems(): Chat.ChatSymbol[] {
    if (!activeQuery) return [];

    const items = getSymbolItemsByType(activeQuery.type);
    const lowerQuery = activeQuery.query.toLowerCase();

    const filteredMentionItems = items.filter((item) => {
      return item.display.toLowerCase().includes(lowerQuery);
    });

    const chatSymbols: Chat.ChatSymbol[] = filteredMentionItems.map((item) => ({
      ...item,
      searchTerm: item.display,
      displayText: item.display,
    }));

    return chatSymbols;
  }

  function handleSelect(item: Chat.ChatSymbol) {
    if (!activeQuery) return;

    const { type, index, query } = activeQuery;
    const searchKeyword = item.searchTerm;

    const replaceQueryProps = {
      input,
      startIndex: index,
      queryLength: query.length,
      type,
      searchKeyword,
    };

    const newValue = replaceQueryInInput({ params: replaceQueryProps });

    setInput(newValue);
  }

  function handleChange(e: Event.InputEventType) {
    const { value } = e.target;
    setInput(value);
  }

  function handleItemClick(item: Chat.ChatSymbol) {
    return () => handleSelect(item);
  }

  return {
    mentionState: {
      filteredItems,
      activeQuery,
    },
    handlers: {
      handleChange,
      handleSelect,
      handleItemClick,
    },
  };
}
