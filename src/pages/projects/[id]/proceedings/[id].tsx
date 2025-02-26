import Header from "@/components/layout/header/Header";
import Document from "@/components/chips/proceedings/Document";
import {
  DocumentClassesStyles,
  ToolClassesStyles,
  UnitClassesStyles,
} from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";
import ErrorFallback from "@/components/errorBoundary/ErrorFallback";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import LoadingPulse from "@/components/ui/loading/Pulse";
import { useToggle } from "@/hooks/utility/useToggle";
import SettingModal from "@/components/portal/modal/SettingModal";
import { RiSettings5Fill } from "react-icons/ri";
import DeleteDocumentModal from "@/components/chips/proceedings/DeleteDocumentModal";
import { documentParams } from "@/utils/helpers/sharedHelpers";

export default function DocDetailPage() {
  const [isOpen, toggle] = useToggle(false);
  const { projectId, documentId } = documentParams();

  function handleSettingOpen() {
    toggle();
  }

  return (
    <div>
      <div className={twMerge(UnitClassesStyles.header)}>
        <Header title="프로젝트 문서 상세 페이지" />
      </div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingPulse />}>
          <div className={twMerge(DocumentClassesStyles.layoutClasses)}>
            <Document />
          </div>
        </Suspense>
      </ErrorBoundary>
      <button
        onClick={handleSettingOpen}
        className={twMerge(ToolClassesStyles.base, ToolClassesStyles.chat)}
      >
        <RiSettings5Fill className={ToolClassesStyles.icon} />
      </button>
      <SettingModal isOpen={isOpen} onClose={handleSettingOpen}>
        <DeleteDocumentModal
          onClose={handleSettingOpen}
          projectId={projectId}
          documentId={documentId}
        />
      </SettingModal>
    </div>
  );
}
