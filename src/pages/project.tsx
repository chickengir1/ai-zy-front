import {
  MainLayoutClassesStyles,
  UnitClassesStyles,
} from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";
import Header from "@/components/layout/header/Header";
import CreationItem from "@/components/chips/creationItem/CreationItem";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import SearchInput from "@/components/ui/search/SearchInput";
import { useToggle } from "@/hooks/utility/useToggle";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/errorBoundary/ErrorFallback";
import { ProjectCardList } from "@/components/chips/projects/ProjectCardList";
import { Suspense } from "react";
import LoadingPulse from "@/components/ui/loading/Pulse";
import PageNationButton from "@/components/ui/pagination/PaginationButton";

export default function ProjectsPage() {
  const [isSidebarOpen, toggleSidebar] = useToggle(false);

  function handleSidebarClose() {
    toggleSidebar();
  }

  function handleSearch() {
    alert("검색 기능 추가 예정");
  }

  function handleSearchChange(e: Event.InputEventType) {
    console.log(e.target.value);
  }

  return (
    <div>
      <div className={twMerge(UnitClassesStyles.header)}>
        <Header title="Ai-Zy 루트페이지" />
      </div>
      <div
        className={twMerge(
          MainLayoutClassesStyles.headerNavPadding,
          "justify-center"
        )}
      >
        <SearchInput
          placeholder="프로젝트를 검색해보세요"
          onClick={handleSearch}
          onChange={handleSearchChange}
        />
      </div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingPulse />}>
          <div className={twMerge(MainLayoutClassesStyles.padding)}>
            <div className={twMerge(MainLayoutClassesStyles.grid)}>
              <ProjectCardList />
              <CreationItem onClick={toggleSidebar} />
            </div>
          </div>
          <PageNationButton />
        </Suspense>
      </ErrorBoundary>
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
    </div>
  );
}
