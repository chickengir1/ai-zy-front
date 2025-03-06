import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { UnitStyles } from "@/utils/styles/global";
import ErrorFallback from "@/components/errorBoundary/errorComponent/ErrorFallback";
import Header from "@/components/layout/header/Header";
import TodolistContainer from "@/components/schedule/todolist/TodoContainer";
import LoadingPulse from "@/components/ui/loading/Pulse";

export default function TodolistPage() {
  return (
    <div>
      <div className={UnitStyles.header}>
        <Header />
      </div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingPulse />}>
          <TodolistContainer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
