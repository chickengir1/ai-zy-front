import { SidebarClassesStyles } from "@/utils/styles/globalStyeld";
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
  // NOTE : 이벤트 타입 나중에 한군데 모으기
  function handleProjectNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setProjectName(e.target.value);
  }

  function handleProjectDescriptionChange(
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setProjectDescription(e.target.value);
  }

  return (
    <div>
      <div className="mb-4">
        <p className={twMerge(SidebarClassesStyles.titleClasses)}>
          프로젝트 이름
        </p>
        <input
          autoFocus
          type="text"
          placeholder="프로젝트 이름을 입력하세요"
          className={twMerge(
            SidebarClassesStyles.inputClasses,
            SidebarClassesStyles.inputFocus,
            SidebarClassesStyles.listClasses
          )}
          value={projectName}
          onChange={handleProjectNameChange}
        />
      </div>
      <div>
        <p className={twMerge(SidebarClassesStyles.titleClasses)}>
          프로젝트 설명
        </p>
        <textarea
          placeholder="프로젝트 설명을 입력하세요"
          className={twMerge(
            SidebarClassesStyles.inputClasses,
            SidebarClassesStyles.inputFocus,
            SidebarClassesStyles.listClasses,
            "h-24 resize-none"
          )}
          value={projectDescription}
          onChange={handleProjectDescriptionChange}
        />
      </div>
    </div>
  );
}
