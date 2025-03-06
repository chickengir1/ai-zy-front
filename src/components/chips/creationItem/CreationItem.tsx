import { twMerge } from "tailwind-merge";
import CreationPath from "./CreationPath";
import CreationSidebar from "./CreationSidebar";

interface CreationFormProps {
  path?: string;
  onClick?: () => void;
}

export default function CreationItem({ path, onClick }: CreationFormProps) {
  return (
    <div
      className={twMerge(
        "group relative h-[250px] overflow-hidden rounded-2xl bg-white",
        "border border-gray-200 shadow-sm transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-md",
        "w-[90%] md:h-[300px]"
      )}
    >
      {path ? (
        <CreationPath path={path} />
      ) : (
        <CreationSidebar onClick={onClick} />
      )}
    </div>
  );
}
