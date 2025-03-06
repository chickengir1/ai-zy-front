import { useProjectsData } from "@/hooks/api/projects/useProjectsData";
import ProjectCard from "@/components/chips/projects/ProjectCard";
import CreationItem from "../creationItem/CreationItem";
import { MainLayoutStyles, ProjectCardStyles } from "@/utils/styles/global";
import { twMerge } from "tailwind-merge";
import PageNationButton from "@/components/ui/pagination/PaginationButton";
import { useToggle } from "@/hooks/utility/toggle/useToggle";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import SearchInput from "@/components/ui/search/SearchInput";
import { Link } from "react-router-dom";
import { projectDataTransform } from "@/utils/common/serverDataTransform";

export function ProjectCardList() {
  const { projectItems } = useProjectsData();
  const [isOpen, toggle] = useToggle(false);

  const { item, url } = projectDataTransform(projectItems);

  function handleSidebarClose() {
    toggle();
  }

  return (
    <>
      <div
        className={twMerge(MainLayoutStyles.headerNavPadding, "justify-center")}
      >
        <SearchInput
          placeholder="프로젝트를 검색해보세요"
          items={item}
          dynamicUrl={url}
        />
      </div>
      <div className={twMerge(MainLayoutStyles.padding)}>
        <div className={twMerge(MainLayoutStyles.grid)}>
          {projectItems.map((project) => (
            <div key={project.id} className={twMerge(ProjectCardStyles.layout)}>
              <Link to={`/projects/${project.id}`}>
                <ProjectCard
                  participantCount={project.attendeeNames.length}
                  attendeeNames={project.attendeeNames}
                  name={project.title}
                  description={project.description}
                  tag={project.tag}
                />
              </Link>
            </div>
          ))}
          <CreationItem onClick={toggle} />
        </div>
      </div>
      <PageNationButton dataLength={projectItems.length} />
      <Sidebar isOpen={isOpen} onClose={handleSidebarClose} />
    </>
  );
}
