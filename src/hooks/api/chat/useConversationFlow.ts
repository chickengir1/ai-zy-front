import { useMemo } from "react";

function processResponseContent(content: string): string {
  try {
    if (content.trim().startsWith("{") && content.trim().endsWith("}")) {
      const parsed = JSON.parse(content);
      return parsed.response || content;
    }
    return content;
  } catch (error) {
    console.error("응답 내용 파싱 오류", error);
    return content;
  }
}

function buildConversationFlow(
  messages: Chat.Message[],
  chatResponses: { response: string }[]
): Chat.Message[] {
  const pairedMessages = messages
    .map((message, index) => {
      const array = [message];
      if (index < chatResponses.length) {
        const botMessage: Chat.Message = {
          type: "normal",
          sender: "bot",
          rawCommand: processResponseContent(chatResponses[index].response),
        };
        array.push(botMessage);
      }
      return array;
    })
    .flat();

  const extraResponses = chatResponses
    .slice(messages.length)
    .map((response) => {
      const botMessage: Chat.Message = {
        type: "normal",
        sender: "bot",
        rawCommand: processResponseContent(response.response),
      };
      return botMessage;
    });

  return [...pairedMessages, ...extraResponses];
}

export function useConversationFlow(
  messages: Chat.Message[],
  chatResponses: { response: string }[]
): Chat.Message[] {
  const conversationFlow = useMemo(() => {
    return buildConversationFlow(messages, chatResponses);
  }, [messages, chatResponses]);

  return conversationFlow;
}
