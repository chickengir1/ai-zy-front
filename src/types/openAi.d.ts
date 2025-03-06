declare namespace OpenAiRes {
  export interface OpenAIResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: {
      index: number;
      message: {
        role: string;
        content: string;
        refusal: null | string;
      };
      logprobs: null | unknown;
      finish_reason: string;
    }[];
    usage: {
      prompt_tokens: number;
      completion_tokens: number;
      total_tokens: number;
      prompt_tokens_details?: {
        cached_tokens: number;
        audio_tokens: number;
      };
      completion_tokens_details?: {
        reasoning_tokens: number;
        audio_tokens: number;
        accepted_prediction_tokens: number;
        rejected_prediction_tokens: number;
      };
    };
    service_tier: string;
    system_fingerprint: null | string;
  }
}

declare namespace OpenAiReq {
  export interface OpenAIPayload {
    content: string;
  }
}
