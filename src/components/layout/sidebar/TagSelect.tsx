import { SidebarClassesStyles } from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";
import SelectWrapper from "@/components/ui/select/SelectWrapper";

interface TagSelectProps {
  tag: string[];
  selectedTag: string;
  getTag: (value: string) => void;
}

export default function TagSelect({
  tag,
  selectedTag,
  getTag,
}: TagSelectProps) {
  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    getTag(e.target.value);
  };

  return (
    <div>
      <p className={twMerge(SidebarClassesStyles.titleClasses)}>태그</p>
      <SelectWrapper>
        <select
          className={twMerge(
            "w-full appearance-none px-4 py-2 pr-10 text-gray-700",
            "transition-all duration-200 ease-in-out",
            "hover:border-gray-400",
            SidebarClassesStyles.inputClasses,
            SidebarClassesStyles.listClasses,
            SidebarClassesStyles.inputFocus
          )}
          value={selectedTag}
          onChange={handleTagChange}
        >
          {tag.map((tag) => (
            <option key={tag} value={tag} className="text-gray-700">
              {tag}
            </option>
          ))}
        </select>
      </SelectWrapper>
    </div>
  );
}
