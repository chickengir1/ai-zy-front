import { SidebarClassesStyles } from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";
import SelectWrapper from "@/components/ui/select/SelectWrapper";
import Select from "@/components/ui/select/Select";
import { useSidebarForm } from "@/hooks/ui/sidebar/useSidebarForm";
import { tag } from "@/utils/constants";

export default function TagSelect({ onClose }: Sidebar.SidebarProps) {
  const { formState, handlers } = useSidebarForm({
    onClose,
  });

  const { sidebarFormData } = formState;
  const { handleTagSelect } = handlers;

  return (
    <div>
      <p className={twMerge(SidebarClassesStyles.titleClasses)}>태그</p>
      <SelectWrapper>
        <Select
          value={sidebarFormData.tag}
          onChange={handleTagSelect}
          options={tag}
        />
      </SelectWrapper>
    </div>
  );
}
