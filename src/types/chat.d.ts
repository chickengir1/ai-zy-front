declare namespace Chat {
  export type SymbolType = "@" | "#" | "!";
  export type MessageType = "normal" | "command";
  export type SenderType = "user" | "bot";

  export interface BaseSymbol {
    id: string;
    display: string;
  }

  export interface ChatSymbol extends BaseSymbol {
    searchTerm: string;
    displayText: string;
  }

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

  export interface ActiveQuery {
    type: SymbolType;
    query: string;
    index: number;
  }

  export interface ModeColors {
    bg: string;
    text: string;
    border: string;
    placeholder: string;
  }

  export interface FilteredParams {
    command: ChatSymbol[];
    document: ChatSymbol[];
    exclamation: ChatSymbol[];
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

  export interface MentionItem {
    input: string;
    items: Mention[];
    symbol: string;
  }

  export interface ReplaceParams {
    params: {
      input: string;
      startIndex: number;
      queryLength: number;
      type: SymbolType;
      searchKeyword: string;
    };
  }

  export interface ChatProps {
    isCommandMode: boolean;
  }
}
