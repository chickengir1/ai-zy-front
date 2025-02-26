import { twMerge } from "tailwind-merge";
import { BaseClassesStyles } from "@/utils/styles/globalStyeld";
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
        "flex flex-col items-center justify-center bg-white",
        BaseClassesStyles.container
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
