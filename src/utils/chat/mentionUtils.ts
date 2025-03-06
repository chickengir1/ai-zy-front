import { SymbolChar } from "@/utils/chat/chatConstans";
import { getSymbolCatalog } from "@/utils/chat/chatUtils";

interface LastSymbolInfo {
  symbolType: Chat.SymbolType;
  index: number;
}

export function getSymbolMapping(): Record<Chat.SymbolType, Chat.ChatSymbol[]> {
  const symbolCatalog = getSymbolCatalog();

  return {
    [SymbolChar.MENTION]: symbolCatalog.command,
    [SymbolChar.TAG]: symbolCatalog.proceeding,
    [SymbolChar.EXCLAMATION]: symbolCatalog.exclamation,
  };
}

export function getSymbolItemsByType(type: Chat.SymbolType): Chat.ChatSymbol[] {
  return getSymbolMapping()[type];
}

function findLastSymbol(value: string): LastSymbolInfo | null {
  const lastAlpha = value.lastIndexOf(SymbolChar.MENTION);
  const lastHash = value.lastIndexOf(SymbolChar.TAG);
  const lastExclamation = value.lastIndexOf(SymbolChar.EXCLAMATION);

  const lastIndex = Math.max(lastAlpha, lastHash, lastExclamation);
  if (lastIndex === -1) return null;

  let symbolType: Chat.SymbolType;

  switch (lastIndex) {
    case lastAlpha:
      symbolType = SymbolChar.MENTION;
      break;
    case lastExclamation:
      symbolType = SymbolChar.EXCLAMATION;
      break;
    case lastHash:
      symbolType = SymbolChar.TAG;
      break;
    default:
      symbolType = SymbolChar.MENTION;
  }

  return {
    symbolType,
    index: lastIndex,
  };
}

export function getActiveQuery(value: string): Chat.ActiveQuery | null {
  const symbolInfo = findLastSymbol(value);

  if (!symbolInfo) return null;

  const { symbolType, index } = symbolInfo;
  const query = value.slice(index + 1);

  if (query.includes(" ")) return null;

  return {
    type: symbolType,
    query,
    index,
  };
}

export function replaceQueryInInput({ params }: Chat.ReplaceParams) {
  const { input, startIndex, queryLength, type, searchKeyword } = params;

  const beforeSymbol = input.slice(0, startIndex);
  const afterSymbol = input.slice(startIndex + queryLength + 1);

  return `${beforeSymbol}${type}${searchKeyword} ${afterSymbol}`;
}

export function findMentionItem({ input, items, symbol }: Chat.MentionItem) {
  const result = items.find((item) => {
    const searchTerm = item.searchTerm;
    const display = item.display;

    const searchKeyword = searchTerm || display;

    const symbolPattern = `${symbol}${searchKeyword}`;

    return input.includes(symbolPattern);
  });

  return result;
}

export function findSymbolItems(input: string, params: Chat.FilteredParams) {
  const { command, proceeding, exclamation } = params;

  const actionItem = findMentionItem({
    input,
    items: command,
    symbol: SymbolChar.MENTION,
  });

  const tagItem = findMentionItem({
    input,
    items: proceeding,
    symbol: SymbolChar.TAG,
  });

  const exclaimItem = findMentionItem({
    input,
    items: exclamation,
    symbol: SymbolChar.EXCLAMATION,
  });

  return { actionItem, tagItem, exclaimItem };
}

export function shouldShowMentionList(
  activeQuery: Chat.ActiveQuery | null,
  filteredItems: Chat.ChatSymbol[]
) {
  return activeQuery !== null && filteredItems.length > 0;
}
