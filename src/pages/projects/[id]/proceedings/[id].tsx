import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { twMerge } from "tailwind-merge";
import { ProceedingStyles, UnitStyles } from "@/utils/styles/global";
import Proceeding from "@/components/chips/proceedings/Proceeding";
import ErrorFallback from "@/components/errorBoundary/errorComponent/ErrorFallback";
import Header from "@/components/layout/header/Header";
import LoadingPulse from "@/components/ui/loading/Pulse";

export default function ProceedingDetailPage() {
  return (
    <div>
      <div className={twMerge(UnitStyles.header)}>
        <Header />
      </div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingPulse />}>
          <div className={twMerge(ProceedingStyles.layoutClasses)}>
            <Proceeding />
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
