import {
  CommandBaseesStyles,
  NormalBaseesStyles,
} from "@/utils/styles/globalStyeld";
import { findMentionItem } from "@/utils/helpers/mentionUtils";
import { itemList } from "@/utils/helpers/regex";
import { commandItems, prioritiesItems, SymbolType } from "@/utils/constants";
import { getDocumentMapItems } from "@/utils/helpers/sharedHelpers";

export function getModeColors(isCommandMode: boolean): Chat.ModeColors {
  return isCommandMode ? CommandBaseesStyles : NormalBaseesStyles;
}

export function getMessageStyle(isUser: boolean) {
  const user = "bg-indigo-600 text-white";
  const bot = "bg-gray-200 text-gray-800";

  return isUser ? user : bot;
}

// NOTE: 명령어 메시지 생성
export function createCommandMessage(input: string): Chat.Message | null {
  const command = itemList(commandItems);
  const document = itemList(getDocumentMapItems());
  const exclamation = itemList(prioritiesItems);

  const params = {
    command,
    document,
    exclamation,
  };

  const commandResultProps = FilteredResult(input, params);

  const { action, tag, exclamation: exclaim, rawCommand } = commandResultProps;

  const { display: actionDisplay, id: actionId } = action;
  const { display: tagDisplay, id: tagId } = tag;
  const { display: exclamationDisplay, id: exclamationId } = exclaim;

  const finalTagDisplay = tagDisplay || exclamationDisplay;
  const finalTagId = tagId || exclamationId;

  return {
    type: "command",
    sender: "user",
    action: actionDisplay,
    actionId,
    tag: finalTagDisplay,
    tagId: finalTagId,
    exclamation: exclamationDisplay,
    exclamationId,
    rawCommand,
  };
}

// NOTE: 일반 메시지 생성
export function createNormalMessage(input: string): Chat.Message | null {
  if (!input.trim()) {
    alert("메시지를 입력해주세요.");
    return null;
  }

  return {
    type: "normal",
    sender: "user",
    rawCommand: input,
  };
}

function findSymbol(
  input: string,
  items: Chat.ChatSymbol[],
  symbolType: Chat.SymbolType
) {
  return findMentionItem({ input, items, symbol: symbolType });
}

// NOTE: rawCommand 가공을 위한 함수
function processRawCommand(input: string, symbols: string[]): string {
  const result = input.replace(/[@#!]/g, "").trim();

  // NOTE: symbols 배열에 담긴 각 심볼 문자열 result에서 제거.
  // NOTE: 정규표현식에서 특수문자 이스케이프 처리
  const processedResult = symbols
    .filter((sym) => sym)
    .map((sym) => {
      const escapedSym = sym.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
      return new RegExp(escapedSym, "g");
    })
    .reduce((acc, regex) => acc.replace(regex, ""), result);

  return processedResult.trim();
}

export function FilteredResult(
  input: string,
  params: Chat.FilteredParams
): Chat.FilteredResult {
  const { command, document, exclamation } = params;

  const actionItem = findSymbol(input, command, SymbolType.MENTION);
  const tagItem = findSymbol(input, document, SymbolType.TAG);
  const exclaimItem = findSymbol(input, exclamation, SymbolType.EXCLAMATION);

  const symbolsToRemove: string[] = [];
  if (actionItem?.display) symbolsToRemove.push(actionItem.display);
  if (tagItem?.display) symbolsToRemove.push(tagItem.display);
  if (exclaimItem?.display) symbolsToRemove.push(exclaimItem.display);

  const rawCommand = processRawCommand(input, symbolsToRemove);

  return {
    action: {
      display: actionItem?.display || "",
      id: actionItem?.id || "",
    },
    tag: {
      display: tagItem?.display || "",
      id: tagItem?.id || "",
    },
    exclamation: {
      display: exclaimItem?.display || "",
      id: exclaimItem?.id || "",
    },
    rawCommand,
  };
}
