import { Link } from "react-router-dom";
import { IoPushOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import {
  BaseClassesStyles,
  SizeClassesStyles,
} from "@/utils/styles/globalStyeld";

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
              className={twMerge(
                BaseClassesStyles.icon,
                SizeClassesStyles.icon
              )}
            />
          </div>
          <span
            className={twMerge(BaseClassesStyles.text, SizeClassesStyles.text)}
          >
            새 작업
          </span>
        </Link>
      ) : (
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
              className={twMerge(
                BaseClassesStyles.icon,
                SizeClassesStyles.icon
              )}
            />
          </div>
          <span
            className={twMerge(BaseClassesStyles.text, SizeClassesStyles.text)}
          >
            새 작업
          </span>
        </button>
      )}
    </div>
  );
}
