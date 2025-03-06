import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { CreationItemStyles } from "@/utils/styles/global";

interface CreationPathProps {
  path: string;
}

export default function CreationPath({ path }: CreationPathProps) {
  return (
    <Link to={path} className={twMerge(CreationItemStyles.link)}>
      <div className={CreationItemStyles.iconContainer}>
        <IoAdd className={CreationItemStyles.icon} />
      </div>
      <span className={CreationItemStyles.text}>새 작업</span>
    </Link>
  );
}
