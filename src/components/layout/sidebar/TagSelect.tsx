import { SidebarClasses } from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";

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
  return (
    <div>
      <p className={twMerge(SidebarClasses.titleClasses)}>태그</p>
      <select
        className={twMerge(
          SidebarClasses.inputClasses,
          SidebarClasses.listClasses
        )}
        value={selectedTag}
        onChange={(e) => getTag(e.target.value)}
      >
        {tag.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}
