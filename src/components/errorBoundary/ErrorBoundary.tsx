import { FallbackProps } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

export default function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
  const navigate = useNavigate();

  return (
    <div className="my-8 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-red-500">오류가 발생했어요</h1>
      <div className="flex flex-col gap-4">
        <button onClick={resetErrorBoundary}>다시 시도</button>
        <button onClick={() => navigate("/projects")}>
          프로젝트 페이지로 이동
        </button>
      </div>
    </div>
  );
}
