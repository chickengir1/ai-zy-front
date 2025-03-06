import { SymbolChar } from "@/utils/chat/chatConstans";
import { escapeRegExp, getSymbolCatalog } from "@/utils/chat/chatUtils";
import { findSymbolItems } from "@/utils/chat/mentionUtils";
import { CommandBaseStyles, NormalBaseStyles } from "@/utils/styles/global";

export function getModeColors(isCommandMode: boolean): Chat.ModeColors {
  return isCommandMode ? CommandBaseStyles : NormalBaseStyles;
}

export function getMessageStyle(isUser: boolean) {
  const user = "bg-indigo-600 text-white";
  const bot = "bg-gray-200 text-gray-800";

  return isUser ? user : bot;
}

function processRawCommand(
  input: string,
  commands: { symbol: string; text: string }[]
): string {
  const validCommands = commands.filter((command) => command.text);

  const processedText = validCommands.reduce((currentText, command) => {
    const { symbol, text } = command;
    const filteredPattern = `${symbol}${escapeRegExp(text)}(\\s|$)`;
    const currentPattern = new RegExp(filteredPattern, "g");

    const processedRawCommand = currentText.replace(currentPattern, "");

    return processedRawCommand;
  }, input);

  const resultRawCommand = processedText.replace(/\s+/g, " ").trim();

  return resultRawCommand;
}

export function FilteredMessage(
  input: string,
  params: Chat.FilteredParams
): Chat.FilteredResult {
  const { actionItem, tagItem, exclaimItem } = findSymbolItems(input, params);

  const commandsToRemove = [
    { symbol: SymbolChar.MENTION, text: actionItem?.display || "" },
    { symbol: SymbolChar.TAG, text: tagItem?.display || "" },
    { symbol: SymbolChar.EXCLAMATION, text: exclaimItem?.display || "" },
  ];

  const action = {
    display: actionItem?.display || "",
    id: actionItem?.id || "",
  };

  const tag = {
    display: tagItem?.display || "",
    id: tagItem?.id || "",
  };

  const exclamation = {
    display: exclaimItem?.display || "",
    id: exclaimItem?.id || "",
  };

  const rawCommand = processRawCommand(input, commandsToRemove);

  return {
    action,
    tag,
    exclamation,
    rawCommand,
  };
}

export function createCommandMessage(input: string): Chat.Message {
  const params = getSymbolCatalog();

  const commandResultProps = FilteredMessage(input, params);

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
