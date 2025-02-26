import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import {
  BaseClassesStyles,
  SizeClassesStyles,
} from "@/utils/styles/globalStyeld";
import { IoPushOutline } from "react-icons/io5";

interface CreationPathProps {
  path: string;
}

export default function CreationPath({ path }: CreationPathProps) {
  return (
    <Link
      to={path}
      className={twMerge(
        BaseClassesStyles.linkButton,
        SizeClassesStyles.linkButton
      )}
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
    </Link>
  );
}
