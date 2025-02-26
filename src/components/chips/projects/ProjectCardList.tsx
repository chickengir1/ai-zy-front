import ProjectCard from "@/components/chips/projects/ProjectCard";
import { useProjectsData } from "@/hooks/api/projects/useProjectsData";

export function ProjectCardList() {
  const { projectItems } = useProjectsData();

  return (
    <>
      {projectItems.map((project) => (
        <ProjectCard
          key={project.id}
          participantCount={project.attendeeNames.length}
          name={project.title}
          description={project.description}
          gradientFrom="from-black/10"
          gradientTo="to-black/50"
          tag={project.tag}
          linkTo={`/projects/${project.id}`}
        />
      ))}
    </>
  );
}
