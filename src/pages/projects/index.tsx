import { useState } from "react";
import { MainLayoutClasses, UnitClasses } from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";
import Header from "@/components/layout/Header";
import ProjectCard from "@/components/chips/projects/ProjectCard";
import CreationItem from "@/components/chips/CreationItem";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import SearchInput from "@/components/ui/search/SearchInput";

// TODO : 한페이지엔 최대 7개의 프로젝트만 보여줄것, 페이지네이션 버튼 구현

export default function ProjectsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const fetchdataProjectCardLength = 2;

  return (
    <div>
      <div className={twMerge(UnitClasses.header)}>
        <Header title="Ai-Zy 루트페이지" />
      </div>
      <div
        className={twMerge(
          MainLayoutClasses.headerNavPadding,
          "justify-center"
        )}
      >
        <SearchInput
          placeholder="프로젝트를 검색해보세요"
          onClick={() => {
            alert("검색");
          }}
          onChange={() => {}}
        />
      </div>
      <div className={twMerge(MainLayoutClasses.padding)}>
        <div className={twMerge(MainLayoutClasses.grid)}>
          {Array.from({ length: fetchdataProjectCardLength }).map(
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
          <CreationItem
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
          />
        </div>
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
}
