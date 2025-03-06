import { create } from "zustand";

interface ChatConversation {
  id: string;
  name: string;
}

interface ChatConversationState {
  conversations: ChatConversation[];
  setConversations: (conversations: ChatConversation[]) => void;
}

export const useChatConversationStore = create<ChatConversationState>(
  (set) => ({
    conversations: [],
    setConversations: (conversations) => set({ conversations }),
  })
);
