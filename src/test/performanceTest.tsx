import { useChatConversationStore } from "@/store/chat/chatConversationStore";
import { getSymbolCatalog } from "@/utils/chat/chatUtils";

const staticSymbolCatalog = getSymbolCatalog();

const mockProceedingsData = [
  { id: "proc-001", name: "1차 프로젝트 킥오프 미팅" },
  { id: "proc-002", name: "주간 스프린트 회의" },
  { id: "proc-003", name: "UI/UX 디자인 리뷰" },
  { id: "proc-004", name: "백엔드 아키텍처 논의" },
  { id: "proc-005", name: "QA 테스트 계획 수립" },
];

export function measurePerformance(iterations = 1000000) {
  console.log("==== 성능 테스트 시작 ====");

  // 1. 정적 객체 접근 테스트
  console.log("\n1. 정적 객체 접근 테스트");
  const startStatic = performance.now();
  for (let i = 0; i < iterations; i++) {
    const staticResult = staticSymbolCatalog;
    console.log("staticResult", staticResult);
  }
  const endStatic = performance.now();
  const staticDuration = endStatic - startStatic;
  console.log(
    `⭐ 정적 객체 접근 시간 = ${staticDuration.toFixed(2)}ms (총 ${iterations}회 접근)`
  );

  // 2. 일반 함수 테스트
  console.log("\n2. 일반 함수 호출 테스트");
  const startRegular = performance.now();
  for (let i = 0; i < iterations; i++) {
    getSymbolCatalog();
  }
  const endRegular = performance.now();
  const functionDuration = endRegular - startRegular;
  console.log(
    `⭐ 일반 함수 실행 시간 = ${functionDuration.toFixed(2)}ms (총 ${iterations}회 호출)`
  );

  // 결과 계산
  const speedImprovement = functionDuration / staticDuration;
  const improvementPercent =
    ((functionDuration - staticDuration) / functionDuration) * 100;

  // 결과 출력
  console.log("\n==== 결과 요약 ====");
  console.log(
    `\n 정적 객체 접근 속도 향상 = ${speedImprovement.toFixed(1)}배 빠름`
  );
  console.log(
    ` 정적 객체 접근 성능 개선율 = ${improvementPercent.toFixed(1)}%`
  );

  console.log("\n==== 동적 데이터 테스트 ====");

  // 초기 상태 확인
  const initialStaticCount = staticSymbolCatalog.proceeding.length;
  const initialFunctionCount = getSymbolCatalog().proceeding.length;

  console.log("\n== 초기 데이터 ==");
  console.log(`1. 정적 객체의 회의록 수 = ${initialStaticCount}`);
  console.log(`2. 함수 호출의 회의록 수 = ${initialFunctionCount}`);

  // 스토어 업데이트
  const originalStoreState = useChatConversationStore.getState;
  useChatConversationStore.getState = () => ({
    ...originalStoreState(),
    conversations: mockProceedingsData,
  });

  // 변경 후 상태 확인
  const updatedStaticCount = staticSymbolCatalog.proceeding.length;
  const updatedFunctionCount = getSymbolCatalog().proceeding.length;

  console.log("\n== Mock 회의록 데이터 추가 후 ==");
  console.log(`회의록 데이터 추가 = ${mockProceedingsData.length}개`);
  console.log(
    `1. 정적 객체 결과 = ${updatedStaticCount}개 ${updatedStaticCount > initialStaticCount ? "✅ 최신 데이터 반영" : "❌ 변화 없음 (정적 객체는 업데이트되지 않음)"}`
  );
  console.log(
    `2. 함수 호출 결과 = ${updatedFunctionCount}개 ${updatedFunctionCount > initialFunctionCount ? "✅ 최신 데이터 반영" : "❌ 변화 없음"}`
  );

  // 트레이드 오프 평가
  console.log("\n== 성능과 데이터 최신성의 트레이드오프 ==");
  console.log(
    `성능 측면= ${staticDuration < functionDuration ? "정적 객체 승리" : "일반 함수 승리"} (${Math.abs(improvementPercent).toFixed(1)}% 차이)`
  );
  console.log(
    `데이터 최신성= ${updatedStaticCount !== updatedFunctionCount ? "일반 함수 승리" : "동일한 결과"}`
  );

  useChatConversationStore.getState = originalStoreState;

  console.log("\n==== 테스트 종료 ====");

  return {
    staticDuration,
    functionDuration,
    speedImprovement,
    improvementPercent,
  };
}
