import Header from "@/components/layout/header/Header";
import MarkdownEditor from "@/components/chips/markdownEditor/Editor";
import {
  DocumentClassesStyles,
  UnitClassesStyles,
} from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";
import { useParamsValues } from "@/hooks/utility/useParams";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/errorBoundary/ErrorFallback";
import LoadingPulse from "@/components/ui/loading/Pulse";
import { Suspense } from "react";

export default function WritesPage() {
  const docId = useParamsValues("docId");
  const isEditMode = !!docId;

  return (
    <div>
      <div className={twMerge(UnitClassesStyles.header)}>
        <Header title={isEditMode ? "문서 수정" : "새 문서 작성"} />
      </div>
      <div className={twMerge(DocumentClassesStyles.layoutClasses)}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingPulse />}>
            <MarkdownEditor />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
