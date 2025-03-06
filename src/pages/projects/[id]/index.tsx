import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { twMerge } from "tailwind-merge";
import { UnitStyles } from "@/utils/styles/global";
import MeetingCardList from "@/components/chips/proceedings/ProceedingCardList";
import ErrorFallback from "@/components/errorBoundary/errorComponent/ErrorFallback";
import Header from "@/components/layout/header/Header";
import LoadingPulse from "@/components/ui/loading/Pulse";

export default function ProceedingsPage() {
  return (
    <>
      <div className={twMerge(UnitStyles.header)}>
        <Header />
      </div>
      <div>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingPulse />}>
            <MeetingCardList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
}
