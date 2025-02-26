import { create } from "zustand";

const initialState: Chat.Message[] = [];

const initialResponseState: ChatResponse[] = [];

interface ChatState {
  messages: Chat.Message[];
  input: string;
  actions: {
    setInput: (value: string) => void;
    addMessage: (message: Chat.Message) => void;
    resetInput: () => void;
  };
}

interface ChatResponse {
  createdAt: string;
  response: string;
}

interface ChatResponseState {
  chatResponses: ChatResponse[];
  isLoading: boolean;
  actions: {
    setChatResponses: (responses: ChatResponse[]) => void;
    addChatResponse: (response: ChatResponse) => void;
    setIsLoading: (loading: boolean) => void;
  };
}

export const useChatMessageStore = create<ChatState>((set) => ({
  messages: initialState,
  input: "",
  actions: {
    setInput: (value: string) => set({ input: value }),
    addMessage: (message: Chat.Message) =>
      set((state) => ({ messages: [...state.messages, message] })),
    resetInput: () => set({ input: "" }),
  },
}));

export const useChatResponseStore = create<ChatResponseState>((set) => ({
  chatResponses: initialResponseState,
  isLoading: false,
  actions: {
    setChatResponses: (responses: ChatResponse[]) =>
      set({ chatResponses: responses }),
    addChatResponse: (response: ChatResponse) =>
      set((state) => ({
        chatResponses: [...state.chatResponses, response],
      })),
    setIsLoading: (loading: boolean) => set({ isLoading: loading }),
  },
}));

export const useChatMessageActions = () => {
  const { messages, input } = useChatMessageStore();
  const { setInput, addMessage, resetInput } = useChatMessageStore().actions;

  return {
    messages,
    input,
    actions: { setInput, addMessage, resetInput },
  };
};

export const useChatResponseActions = () => {
  const { chatResponses, isLoading } = useChatResponseStore();
  const { setChatResponses, addChatResponse, setIsLoading } =
    useChatResponseStore().actions;

  return {
    chatResponses,
    isLoading,
    actions: { setChatResponses, addChatResponse, setIsLoading },
  };
};
