import { create } from "zustand";

export interface Project {
  id: string;
  title: string;
  description: string;
  tag: string;
  attendeeNames: string[];
}

interface ProjectStore {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  setProjects: (projects: Project[]) => set({ projects }),
}));
