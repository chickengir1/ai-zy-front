import { useParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import {
  MainLayoutClassesStyles,
  UnitClassesStyles,
} from "@/utils/styles/globalStyeld";
import Header from "@/components/layout/header/Header";
import ToggleNav from "@/components/layout/toggle/toggleNav";
import CreationItem from "@/components/chips/creationItem/CreationItem";
import SearchInput from "@/components/ui/search/SearchInput";
import MeetingCardList from "@/components/chips/proceedings/MeetingCardList";
import ErrorFallback from "@/components/errorBoundary/ErrorFallback";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import LoadingPulse from "@/components/ui/loading/Pulse";
import { usePageStore } from "@/store/pageStore";
import PageNationButton from "@/components/ui/pagination/PaginationButton";
import { useChatInterfaceController } from "@/hooks/ui/chatInterface/useChatInterfaceController";
import { useProceedingMappingData } from "@/hooks/api/chat/useProceedingMappingData";

export default function ProjectPage() {
  const { id } = useParams();
  const proceedingId = id ?? "";
  const { page, limit } = usePageStore();

  useProceedingMappingData(proceedingId);

  const { renderChatInterface, renderChatButton } =
    useChatInterfaceController();

  function handleSearch() {
    alert("검색 기능 추가 예정");
  }

  function handleChange(e: Event.InputEventType) {
    console.log(e.target.value);
  }

  return (
    <>
      <div className={twMerge(UnitClassesStyles.header)}>
        <Header title="프로젝트 페이지" />
      </div>
      <div>
        <div
          className={twMerge(
            MainLayoutClassesStyles.headerNavPadding,
            "justify-between"
          )}
        >
          <ToggleNav tabIndex={0} />
          <SearchInput
            placeholder="회의 목록을 검색해보세요"
            onClick={handleSearch}
            onChange={handleChange}
          />
        </div>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingPulse />}>
            <div className={twMerge(MainLayoutClassesStyles.padding)}>
              <div className={twMerge(MainLayoutClassesStyles.grid)}>
                <MeetingCardList page={String(page)} limit={String(limit)} />
                <CreationItem path={`/projects/${id}/proceedings/writes`} />
              </div>
            </div>
            <PageNationButton />
          </Suspense>
        </ErrorBoundary>
      </div>
      {renderChatInterface()}
      {renderChatButton()}
    </>
  );
}
