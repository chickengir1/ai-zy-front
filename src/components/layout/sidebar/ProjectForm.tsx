import { twMerge } from "tailwind-merge";
import { useSidebarForm } from "@/hooks/business/sidebar/useSidebarForm";
import { SidebarStyles } from "@/utils/styles/global";

export default function ProjectForm({ onClose }: Sidebar.SidebarProps) {
  const { formState, handlers } = useSidebarForm({
    onClose,
  });
  const { sidebarFormData } = formState;
  const { handleFormChange } = handlers;

  function handleChange(field: keyof Sidebar.SidebarFormProps) {
    return (e: Event.FactoryEventType) => {
      handleFormChange(field)(e.target.value);
    };
  }

  return (
    <div>
      <div className="mb-4">
        <p className={twMerge(SidebarStyles.titleClasses)}>프로젝트 이름</p>
        <input
          autoFocus
          type="text"
          placeholder="프로젝트 이름을 입력하세요"
          className={twMerge(
            SidebarStyles.inputClasses,
            SidebarStyles.inputFocus,
            SidebarStyles.listClasses
          )}
          value={sidebarFormData.title}
          onChange={handleChange("title")}
        />
      </div>
      <div>
        <p className={twMerge(SidebarStyles.titleClasses)}>프로젝트 설명</p>
        <textarea
          placeholder="프로젝트 설명을 입력하세요"
          className={twMerge(
            SidebarStyles.inputClasses,
            SidebarStyles.inputFocus,
            SidebarStyles.listClasses,
            "h-24 resize-none"
          )}
          value={sidebarFormData.description}
          onChange={handleChange("description")}
        />
      </div>
    </div>
  );
}
