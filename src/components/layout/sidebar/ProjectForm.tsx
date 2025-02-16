import { SidebarClasses } from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";

interface ProjectFormProps {
  projectName: string;
  projectDescription: string;
  setProjectName: (value: string) => void;
  setProjectDescription: (value: string) => void;
}

export default function ProjectForm({
  projectName,
  projectDescription,
  setProjectName,
  setProjectDescription,
}: ProjectFormProps) {
  return (
    <div>
      <div className="mb-4">
        <p className={twMerge(SidebarClasses.titleClasses)}>프로젝트 이름</p>
        <input
          type="text"
          placeholder="프로젝트 이름을 입력하세요"
          className={twMerge(
            SidebarClasses.inputClasses,
            SidebarClasses.listClasses
          )}
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>
      <div>
        <p className={twMerge(SidebarClasses.titleClasses)}>프로젝트 설명</p>
        <textarea
          placeholder="프로젝트 설명을 입력하세요"
          className={twMerge(
            SidebarClasses.inputClasses,
            SidebarClasses.listClasses,
            "h-24 resize-none"
          )}
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
      </div>
    </div>
  );
}
