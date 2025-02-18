import { SidebarClasses } from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";
import { LuSquareArrowDown } from "react-icons/lu";

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
      <p className={twMerge(SidebarClasses.titleClasses)}>태그</p>
      <div className="relative w-full">
        <select
          className={twMerge(
            "w-full appearance-none px-4 py-2 pr-10 text-gray-700",
            "transition-all duration-200 ease-in-out",
            "hover:border-gray-400",
            SidebarClasses.inputClasses,
            SidebarClasses.listClasses,
            SidebarClasses.inputFocus
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
        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700">
          <LuSquareArrowDown className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
