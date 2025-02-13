import { Link } from "react-router-dom";
import ErrorTest from "@/components/errorBoundary/ErrorTest";
import ErrorFallback from "@/components/errorBoundary/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";
export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">HomePage</h1>
      <Link to="/projects">Projects</Link>
      <h1>ErrorBoundary 테스트</h1>
      <ErrorTestComponent />
    </div>
  );
}

function ErrorTestComponent() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ErrorTest />
    </ErrorBoundary>
  );
}
