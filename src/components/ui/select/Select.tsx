import { twMerge } from "tailwind-merge";
import { SidebarStyles } from "@/utils/styles/global";

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
  function renderOptions(items: string[]) {
    return items.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
  }
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={twMerge(
        "w-full appearance-none px-4 py-2 pr-10 text-gray-700",
        "transition-all duration-200 ease-in-out",
        "hover:border-gray-400",
        SidebarStyles.inputClasses,
        SidebarStyles.listClasses,
        SidebarStyles.inputFocus,
        className
      )}
    >
      {renderOptions(options)}
    </select>
  );
}
