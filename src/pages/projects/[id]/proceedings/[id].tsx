import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import ErrorFallback from "@/components/errorBoundary/ErrorFallback";
import ErrorTest from "@/components/errorBoundary/ErrorTest";
import { ErrorBoundary } from "react-error-boundary";

export default function DocDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <Header title="프로젝트 문서 상세 페이지" />
      <p className="text-lg">{id}</p>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ErrorTest />
      </ErrorBoundary>
    </div>
  );
}
