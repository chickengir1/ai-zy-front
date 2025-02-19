import { Link } from "react-router-dom";
import { IoPushOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { BaseClasses, SizeClasses } from "@/utils/styles/globalStyeld";

interface CreationFormProps {
  path?: string;
  onClick?: () => void;
}

export default function CreationItem({ path, onClick }: CreationFormProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center bg-white",
        BaseClasses.container
      )}
    >
      {path ? (
        <Link
          to={path}
          className={twMerge(BaseClasses.linkButton, SizeClasses.linkButton)}
        >
          <div
            className={twMerge(
              BaseClasses.iconContainer,
              SizeClasses.iconContainer
            )}
          >
            <IoPushOutline
              className={twMerge(BaseClasses.icon, SizeClasses.icon)}
            />
          </div>
          <span className={twMerge(BaseClasses.text, SizeClasses.text)}>
            새 작업
          </span>
        </Link>
      ) : (
        <button
          className={twMerge(BaseClasses.linkButton, SizeClasses.linkButton)}
          onClick={onClick}
        >
          <div
            className={twMerge(
              BaseClasses.iconContainer,
              SizeClasses.iconContainer
            )}
          >
            <IoPushOutline
              className={twMerge(BaseClasses.icon, SizeClasses.icon)}
            />
          </div>
          <span className={twMerge(BaseClasses.text, SizeClasses.text)}>
            새 작업
          </span>
        </button>
      )}
    </div>
  );
}
