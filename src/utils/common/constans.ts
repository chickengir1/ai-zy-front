export const MIN_WIDTH = 320;

export const MAX_PARTICIPANT_ICONS = 5;

export const tag = [
  "일반",
  "기획",
  "디자인",
  "개발",
  "검토",
  "마케팅",
  "운영",
  "인사",
];

export const defaultParams = {
  page: "0",
};

export const RoutePaths = {
  HOME: "/",
  PROJECT_DASHBOARD: "/project",
  PROJECT_CALLBACK: "/projects",
  PROJECT_OVERVIEW: "/projects/:id",
  PROCEEDING_REPOSITORY: "/projects/:id/proceedings/:id",
  TASK_HUB: "/projects/:id/todolist",
} as const;

export const PageTitles = {
  HOME: "Ai-Zy 통합 관리 플랫폼",
  PROJECT_DASHBOARD: "프로젝트 대시보드",
  PROJECT_CALLBACK: "프로젝트 콜백",
  PROJECT_OVERVIEW: "회의 내역 저장소 | 작업 공간",
  PROCEEDING_REPOSITORY: "회의 내역 개요 | 작업 공간",
  TASK_HUB: "업무 관리 허브 | 투두리스트",
} as const;

export function paginationConfig(dataLength: number, page: number) {
  return {
    itemsPerPage: 6,
    isNextDisabled: dataLength < 7,
    showIndicator: page > 0,
  };
}

export const features = [
  {
    icon: "🎤",
    title: "AI 회의 관리",
    description: "회의록 작성본을 AI가 자동 요약 및 분석해드립니다",
  },
  {
    icon: "✅",
    title: "AI 투두리스트",
    description: "업무 내역을 자동으로 생성 및 관리합니다",
  },
  {
    icon: "🤖",
    title: "AI 어시스턴트",
    description: "실시간 AI 채팅을 통한 업무 효율성을 극대화합니다",
  },
];

export const teamMembers = ["이강호", "안승우", "김연지", "이태정", "백승일"];

export const animationChars = ["A", "I", "-", "Z", "Y"];
