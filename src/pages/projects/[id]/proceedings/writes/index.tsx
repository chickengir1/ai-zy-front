import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { twMerge } from "tailwind-merge";
import { useProceedingForm } from "@/hooks/business/proceedings/useProceedingForm";
import { ProceedingStyles, UnitStyles } from "@/utils/styles/global";
import MarkdownEditor from "@/components/chips/markdownEditor/Editor";
import ErrorFallback from "@/components/errorBoundary/errorComponent/ErrorFallback";
import Header from "@/components/layout/header/Header";
import LoadingPulse from "@/components/ui/loading/Pulse";

export default function WritesPage() {
  const { proceedingState } = useProceedingForm();
  const { isEditMode } = proceedingState;

  return (
    <div>
      <div className={twMerge(UnitStyles.header)}>
        <Header title={isEditMode ? "문서 수정" : "새 문서 작성"} />
      </div>
      <div className={twMerge(ProceedingStyles.layoutClasses)}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingPulse />}>
            <MarkdownEditor />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
