import { create } from "zustand";

const initialState: Chat.Message[] = [];

const initialResponseState: Chat.ChatResponse[] = [];

export const useChatInteractionStore = create<Chat.ChatState>((set) => ({
  messages: initialState,
  input: "",
  actions: {
    setInput: (value: string) => set({ input: value }),
    addMessage: (message: Chat.Message) =>
      set((state) => ({ messages: [...state.messages, message] })),
    resetInput: () => set({ input: "" }),
  },
}));

export const useChatInteractionActions = () => {
  const { messages, input } = useChatInteractionStore();
  const { setInput, addMessage, resetInput } =
    useChatInteractionStore().actions;

  return {
    messages,
    input,
    actions: { setInput, addMessage, resetInput },
  };
};

export const useChatResponseStore = create<Chat.ChatResponseState>((set) => ({
  responses: initialResponseState,
  isLoading: false,
  actions: {
    setResponses: (responses: Chat.ChatResponse[]) => set({ responses }),
    addResponse: (response: Chat.ChatResponse) =>
      set((state) => ({
        responses: [...state.responses, response],
      })),
    setIsLoading: (loading: boolean) => set({ isLoading: loading }),
  },
}));

export const useChatResponseActions = () => {
  const { responses, isLoading } = useChatResponseStore();
  const { setResponses, addResponse, setIsLoading } =
    useChatResponseStore().actions;

  return {
    responses,
    isLoading,
    actions: { setResponses, addResponse, setIsLoading },
  };
};
