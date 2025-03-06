import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { twMerge } from "tailwind-merge";
import { UnitStyles } from "@/utils/styles/global";
import { ProjectCardList } from "@/components/chips/projects/ProjectCardList";
import ErrorFallback from "@/components/errorBoundary/errorComponent/ErrorFallback";
import Header from "@/components/layout/header/Header";
import LoadingPulse from "@/components/ui/loading/Pulse";

export default function MainPage() {
  return (
    <>
      <div className={twMerge(UnitStyles.header)}>
        <Header />
      </div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingPulse />}>
          <ProjectCardList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
