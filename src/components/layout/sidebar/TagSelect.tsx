import { twMerge } from "tailwind-merge";
import { useSidebarForm } from "@/hooks/business/sidebar/useSidebarForm";
import { tag } from "@/utils/common/constans";
import { SidebarStyles } from "@/utils/styles/global";
import Select from "@/components/ui/select/Select";
import SelectWrapper from "@/components/ui/select/SelectWrapper";

export default function TagSelect({ onClose }: Sidebar.SidebarProps) {
  const { formState, handlers } = useSidebarForm({
    onClose,
  });

  const { sidebarFormData } = formState;
  const { handleTagSelect } = handlers;

  return (
    <div>
      <p className={twMerge(SidebarStyles.titleClasses)}>태그</p>
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
