import { renderOptions } from "@/utils/helpers/sharedHelpers";
import { SidebarClassesStyles } from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";

interface SelectProps {
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  className?: string;
}

export default function Select({
  name,
  value,
  onChange,
  options,
  className,
}: SelectProps) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={twMerge(
        "w-full appearance-none px-4 py-2 pr-10 text-gray-700",
        "transition-all duration-200 ease-in-out",
        "hover:border-gray-400",
        SidebarClassesStyles.inputClasses,
        SidebarClassesStyles.listClasses,
        SidebarClassesStyles.inputFocus,
        className
      )}
    >
      {renderOptions(options)}
    </select>
  );
}
