import { useChatConversationStore } from "@/store/chat/chatConversationStore";
import { commandItems, prioritiesItems } from "@/utils/chat/chatConstans";

export function itemList<T extends { display: string }>(items: T[]) {
  return items.map((item) => ({
    ...item,
    searchTerm: item.display,
    displayText: item.display,
  }));
}

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export const getAvailableProceedingTags = () => {
  const { conversations } = useChatConversationStore.getState();

  return conversations.map((item) => ({
    id: item.id,
    display: item.name,
  }));
};

export function getSymbolCatalog() {
  return {
    command: itemList(commandItems),
    proceeding: itemList(getAvailableProceedingTags()),
    exclamation: itemList(prioritiesItems),
  };
}
