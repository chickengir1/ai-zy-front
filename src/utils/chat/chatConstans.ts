export const SymbolChar = {
  MENTION: "@",
  TAG: "#",
  EXCLAMATION: "!",
} as const;

export const Symbol = {
  mention: SymbolChar.MENTION,
  tag: SymbolChar.TAG,
  exclamation: SymbolChar.EXCLAMATION,
} as const;

export const commandItems = [
  { id: "SUMMARY_PROCEEDINGS", display: "요약하기" },
  { id: "CREATE_TODO", display: "생성하기" },
];

export const prioritiesItems = [
  { id: "긴급", display: "긴급" },
  { id: "업무", display: "업무" },
  { id: "프로젝트", display: "프로젝트" },
  { id: "팔로업", display: "팔로업" },
  { id: "개인", display: "개인" },
];
