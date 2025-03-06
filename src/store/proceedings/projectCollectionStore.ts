import { create } from "zustand";

export interface Project {
  id: string;
  title: string;
  description: string;
  tag: string;
  attendeeNames: string[];
}

interface ProjectCollectionStore {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}

export const useProjectCollectionStore = create<ProjectCollectionStore>(
  (set) => ({
    projects: [],
    setProjects: (projects: Project[]) => set({ projects }),
  })
);
