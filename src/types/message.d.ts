declare namespace Chat {
  export type MessageType = "normal" | "command";
  export type SenderType = "user" | "bot";

  export interface Message {
    type: MessageType;
    sender: SenderType;
    rawCommand: string;
    action?: string;
    actionId?: string;
    tag?: string;
    tagId?: string;
    exclamation?: string;
    exclamationId?: string;
  }

  export interface ModeColors {
    bg: string;
    text: string;
    border: string;
    placeholder: string;
  }

  export interface FilteredParams {
    command: Chat.ChatSymbol[];
    proceeding: Chat.ChatSymbol[];
    exclamation: Chat.ChatSymbol[];
  }

  export interface FilteredResult {
    action: {
      display: string;
      id: string;
    };
    tag: {
      display: string;
      id: string;
    };
    exclamation: {
      display: string;
      id: string;
    };
    rawCommand: string;
  }

  export interface ChatSubmissionData {
    action: string;
    tag: string;
    rawCommand: string;
    projectId: string;
  }

  export interface ChatState {
    messages: Chat.Message[];
    input: string;
    actions: {
      setInput: (value: string) => void;
      addMessage: (message: Chat.Message) => void;
      resetInput: () => void;
    };
  }

  export interface ChatResponse {
    createdAt: string;
    response: string;
  }

  export interface ChatResponseState {
    responses: ChatResponse[];
    isLoading: boolean;
    actions: {
      setResponses: (responses: ChatResponse[]) => void;
      addResponse: (response: ChatResponse) => void;
      setIsLoading: (loading: boolean) => void;
    };
  }
}
