import { useProjects } from "@/hooks/api/projects/useProjects";
import { useProjectStore } from "@/store/projectStore";
import { useEffect } from "react";

export function useProjectsData() {
  const { data: projects } = useProjects();
  const projectItems = projects?.content || [];

  const { setProjects } = useProjectStore();

  useEffect(() => {
    if (projects) {
      setProjects(projects.content);
    }
  }, [projects, setProjects]);

  return { projectItems };
}
