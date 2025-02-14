import Header from "@/components/layout/Header";
import ProjectCard from "@/components/chips/projects/ProjectCard";
import CreationItem from "@/components/chips/CreationItem";

const titleProps = "루트페이지";

export default function HomePage() {
  return (
    <div>
      <Header title={titleProps} />
      <div className="m-4 flex flex-col gap-4">
        <ProjectCard
          participantCount={10}
          name="프로젝트 이름"
          description="프로젝트 설명"
          gradientFrom="from-black/10"
          gradientTo="to-black/50"
          tag="태그"
          linkTo="/projects"
        />
        <CreationItem path="/projects" />
      </div>
    </div>
  );
}
