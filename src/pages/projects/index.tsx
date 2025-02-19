import {
  MainLayoutClassesStyles,
  UnitClassesStyles,
} from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";
import { HiChatAlt } from "react-icons/hi";
import Header from "@/components/layout/header/Header";
import ProjectCard from "@/components/chips/projects/ProjectCard";
import CreationItem from "@/components/chips/creationItem/CreationItem";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import SearchInput from "@/components/ui/search/SearchInput";
import ChatInterface from "@/components/chatInterface/ChatInterface";
import { useKeyPress } from "@/hooks/ui/chatInterface/useKeyPress";
import { useToggle } from "@/hooks/utility/useToggle";
import { FETCH_DATA_PROJECT_CARD_LENGTH } from "@/utils/constants";

// TODO : 한페이지엔 최대 7개의 프로젝트만 보여줄것, 페이지네이션 버튼 구현

export default function ProjectsPage() {
  const [isSidebarOpen, toggleSidebar] = useToggle(false);
  const [isChatOpen, toggleChat] = useToggle(false);

  useKeyPress({ targetKey: "i", callback: handleChatToggle });

  function handleSidebarClose() {
    toggleSidebar();
  }

  function handleChatToggle() {
    toggleChat();
  }

  function handleSearch() {
    alert("검색 기능 추가 예정");
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
          onChange={() => {}}
        />
      </div>
      <div className={twMerge(MainLayoutClassesStyles.padding)}>
        <div className={twMerge(MainLayoutClassesStyles.grid)}>
          {Array.from({ length: FETCH_DATA_PROJECT_CARD_LENGTH }).map(
            (_, index) => (
              <ProjectCard
                key={`project-id-${index}`}
                participantCount={10}
                name="프로젝트 이름"
                description="프로젝트 설명"
                gradientFrom="from-black/10"
                gradientTo="to-black/50"
                tag="태그"
                linkTo={`/projects/${index + 1}`}
              />
            )
          )}
          <CreationItem onClick={toggleSidebar} />
        </div>
        <button onClick={toggleChat} className="fixed bottom-4 right-4 z-50">
          <HiChatAlt className="h-8 w-8 scale-x-[-1] transform md:h-10 md:w-10 lg:h-12 lg:w-12" />
        </button>
        {isChatOpen && <ChatInterface onClose={handleChatToggle} />}
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
    </div>
  );
}
