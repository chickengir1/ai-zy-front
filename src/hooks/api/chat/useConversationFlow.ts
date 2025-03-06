interface BotResponse {
  response: string;
}

interface ConversationFlowParams {
  messages: Chat.Message[];
  responses: BotResponse[];
}

interface JsonResponse {
  response?: string;
}

function parseResponseContent(content: string): string {
  const trimmed = content.trim();
  if (!(trimmed.startsWith("{") && trimmed.endsWith("}"))) return content;

  try {
    const parsed = JSON.parse(trimmed) as JsonResponse;
    return parsed.response || content;
  } catch (error) {
    console.error("응답 파싱 오류", error);
    return content;
  }
}

function createBotMessage(response: string): Chat.Message {
  return {
    type: "normal",
    sender: "bot",
    rawCommand: parseResponseContent(response),
  };
}

// NOTE: 채팅 메세지 배열 생성 [user, bot, user, bot, ...]
function pairMessages({ messages, responses }: ConversationFlowParams) {
  return messages.flatMap((msg, idx) => {
    const currentResponse = responses[idx];
    if (!currentResponse) return [msg];

    const botMessageArray = [createBotMessage(currentResponse.response)];
    return [msg, ...botMessageArray];
  });
}

// NOTE: 페어가 없는 봇 메세지 처리 [user, bot, user, bot, bot, bot, ...]
function processExtraResponses({
  messages,
  responses,
}: ConversationFlowParams) {
  const remainingResponses = responses.slice(messages.length);
  const extraResponses = remainingResponses.map(({ response }) =>
    createBotMessage(response)
  );
  return extraResponses;
}

export const useConversationFlow = (
  messages: Chat.Message[],
  chatResponses: BotResponse[]
) => {
  const buildConversationFlow = (params: ConversationFlowParams) => [
    ...pairMessages(params),
    ...processExtraResponses(params),
  ];

  return buildConversationFlow({ messages, responses: chatResponses });
};
