import { commandItems, prioritiesItems, SymbolType } from "@/utils/constants";
import { itemList } from "@/utils/helpers/regex";
import { getDocumentMapItems } from "@/utils/helpers/sharedHelpers";

// NOTE: 현재 입력 중인 심볼과 쿼리 문자열을 반환
export function getActiveQuery(value: string): Chat.ActiveQuery | null {
  const lastAlpha = value.lastIndexOf("@");
  const lastHash = value.lastIndexOf("#");
  const lastExclamation = value.lastIndexOf("!");

  const mention = SymbolType.MENTION;
  const tag = SymbolType.TAG;
  const exclamation = SymbolType.EXCLAMATION;

  const lastIndex = Math.max(lastAlpha, lastHash, lastExclamation);
  if (lastIndex === -1) return null;

  let type: Chat.SymbolType;
  switch (lastIndex) {
    case lastAlpha:
      type = mention;
      break;
    case lastExclamation:
      type = exclamation;
      break;
    case lastHash:
      type = tag;
      break;
    default:
      type = mention;
  }

  const query = value.slice(lastIndex + 1);
  if (query.includes(" ")) return null;

  return {
    type,
    query,
    index: lastIndex,
  };
}

// NOTE: 입력값 내 쿼리 대체 처리
export function replaceQueryInInput({ params }: Chat.ReplaceParams) {
  const { input, startIndex, queryLength, type, searchKeyword } = params;

  const beforeSymbol = input.slice(0, startIndex);
  const afterSymbol = input.slice(startIndex + queryLength + 1);

  return `${beforeSymbol}${type}${searchKeyword} ${afterSymbol}`;
}

// NOTE: 입력값 내 멘션 아이템 찾기
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

// NOTE: 멘션 타입에 따른 아이템 리스트 매핑
export function getSymbolMapping(): Record<Chat.SymbolType, Chat.ChatSymbol[]> {
  return {
    [SymbolType.MENTION]: itemList(commandItems),
    [SymbolType.TAG]: itemList(getDocumentMapItems()),
    [SymbolType.EXCLAMATION]: itemList(prioritiesItems),
  };
}

// NOTE: 멘션시 Ui단에서 멘션 리스트 표시 여부 결정 하는 함수
export function shouldShowMentionList(
  activeQuery: Chat.ActiveQuery | null,
  filteredItems: Chat.ChatSymbol[]
) {
  return activeQuery !== null && filteredItems.length > 0;
}
