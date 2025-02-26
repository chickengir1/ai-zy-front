import { useChatMessageActions } from "@/store/chatStore";
import {
  getActiveQuery,
  replaceQueryInInput,
  getSymbolMapping,
} from "@/utils/helpers/mentionUtils";

export function useCustomMentions() {
  const { input, actions } = useChatMessageActions();
  const { setInput } = actions;

  const activeQuery = getActiveQuery(input);

  function getItemsByQueryType(queryType: Chat.SymbolType) {
    return getSymbolMapping()[queryType] || [];
  }

  function filteredItems(): Chat.ChatSymbol[] {
    if (!activeQuery) return [];

    const items = getItemsByQueryType(activeQuery.type);
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

  // NOTICE: 컴포넌트 이벤트 핸들링 전용
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
