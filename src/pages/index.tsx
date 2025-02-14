import Header from "@/components/layout/Header";
import ProjectCard from "@/components/chips/projects/ProjectCard";
import CreationItem from "@/components/chips/CreationItem";
import MeetingCard from "@/components/chips/proceedings/MeetingCard";

export default function HomePage() {
  return (
    <div>
      <Header title="Ai-Zy 루트페이지" />
      <div className="m-4 flex flex-col flex-wrap gap-4 md:flex-row">
        <ProjectCard
          participantCount={10}
          name="프로젝트 이름"
          description="프로젝트 설명"
          gradientFrom="from-black/10"
          gradientTo="to-black/50"
          tag="태그"
          linkTo="/projects"
        />
        <MeetingCard
          participantCount={10}
          name="프로젝트 이름"
          createdAt="2024-01-01"
          description="프로젝트 설명"
          tag="태그"
          linkTo="/proceedings"
        />
        <CreationItem path="/projects" />
      </div>
    </div>
  );
}
