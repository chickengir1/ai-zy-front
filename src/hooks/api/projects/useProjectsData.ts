import { useEffect } from "react";
import { useProjects } from "@/hooks/api/projects/useProjects";
import { useProjectCollectionStore } from "@/store/proceedings/projectCollectionStore";
import { usePageStore } from "@/store/utilityStore/pageStore";

export function useProjectsData() {
  const { page } = usePageStore();

  const { data: projects } = useProjects({ page: String(page) });
  const projectItems = projects?.content || [];

  const { setProjects } = useProjectCollectionStore();

  useEffect(() => {
    if (projects) {
      setProjects(projects.content);
    }
  }, [projects, setProjects]);

  return { projectItems };
}
