export const defaultParams = {
  page: "0",
  limit: "7",
};

export const MIN_WIDTH = 320;

export const MAX_PARTICIPANT_ICONS = 3;

export const SymbolType = {
  MENTION: "@",
  TAG: "#",
  EXCLAMATION: "!",
} as const;

// NOTE: 명령어 메시지 생성
export const commandItems = [
  { id: "SUMMARY_PROCEEDINGS", display: "요약하기" },
  { id: "CREATE_TODO", display: "생성하기" },
];

// NOTE: 채팅 전용 태그
export const prioritiesItems = [
  { id: "긴급", display: "Urgent" },
  { id: "업무", display: "Work" },
  { id: "프로젝트", display: "Project" },
  { id: "팔로업", display: "Follow-up" },
  { id: "개인", display: "Individual" },
];

export const navigationState = {
  Initial: -2,
  Inactive: -1,
  Active: 0,
} as const;

// NOTE: 투두, 사이드바, 문서 작성에서 사용되는 태그
export const tag = ["개발", "마케팅", "디자인", "운영", "인사"];

export const priorities = ["높음", "중간", "낮음"];
