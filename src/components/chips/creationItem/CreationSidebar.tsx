import { twMerge } from "tailwind-merge";
import {
  BaseClassesStyles,
  SizeClassesStyles,
} from "@/utils/styles/globalStyeld";
import { IoPushOutline } from "react-icons/io5";

interface CreationSidebarProps {
  onClick?: () => void;
}

export default function CreationSidebar({ onClick }: CreationSidebarProps) {
  return (
    <button
      className={twMerge(
        BaseClassesStyles.linkButton,
        SizeClassesStyles.linkButton
      )}
      onClick={onClick}
    >
      <div
        className={twMerge(
          BaseClassesStyles.iconContainer,
          SizeClassesStyles.iconContainer
        )}
      >
        <IoPushOutline
          className={twMerge(BaseClassesStyles.icon, SizeClassesStyles.icon)}
        />
      </div>
      <span className={twMerge(BaseClassesStyles.text, SizeClassesStyles.text)}>
        새 작업
      </span>
    </button>
  );
}
