import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import ErrorFallback from "@/components/errorBoundary/ErrorFallback";
import ErrorTest from "@/components/errorBoundary/ErrorTest";
import { ErrorBoundary } from "react-error-boundary";

export default function ProjectsPage() {
  return (
    <div>
      <Header title="프로젝트 페이지" />
      <Link to="/">Home</Link>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ErrorTest />
      </ErrorBoundary>
    </div>
  );
}
