declare namespace Chat {
  export type SymbolType = "@" | "#" | "!";

  export interface BaseSymbol {
    id: string;
    display: string;
  }

  export interface ChatSymbol extends BaseSymbol {
    searchTerm: string;
    displayText: string;
  }

  export interface ActiveQuery {
    type: SymbolType;
    query: string;
    index: number;
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
}
