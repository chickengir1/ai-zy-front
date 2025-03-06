import { IoAdd } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

import { CreationItemStyles } from "@/utils/styles/global";

interface CreationSidebarProps {
  onClick?: () => void;
}

export default function CreationSidebar({ onClick }: CreationSidebarProps) {
  return (
    <button
      className={twMerge(CreationItemStyles.link, "h-full w-full")}
      onClick={onClick}
    >
      <div className={CreationItemStyles.iconContainer}>
        <IoAdd className={CreationItemStyles.icon} />
      </div>
      <span className={CreationItemStyles.text}>새 작업</span>
    </button>
  );
}
