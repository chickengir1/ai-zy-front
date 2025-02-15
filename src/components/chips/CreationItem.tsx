import { Link } from "react-router-dom";
import { IoPushOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { baseClasses, sizeClasses } from "@/utils/styles/globalStyeld";

interface CreationFormProps {
  path?: string;
  onClick?: () => void;
}

export default function CreationItem({ path, onClick }: CreationFormProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center bg-white",
        baseClasses.container,
        sizeClasses.container
      )}
    >
      {path ? (
        <Link
          to={path}
          className={twMerge(baseClasses.linkButton, sizeClasses.linkButton)}
        >
          <div
            className={twMerge(
              baseClasses.iconContainer,
              sizeClasses.iconContainer
            )}
          >
            <IoPushOutline
              className={twMerge(baseClasses.icon, sizeClasses.icon)}
            />
          </div>
          <span className={twMerge(baseClasses.text, sizeClasses.text)}>
            새 작업
          </span>
        </Link>
      ) : (
        <button
          className={twMerge(baseClasses.linkButton, sizeClasses.linkButton)}
          onClick={onClick}
        >
          <div
            className={twMerge(
              baseClasses.iconContainer,
              sizeClasses.iconContainer
            )}
          >
            <IoPushOutline
              className={twMerge(baseClasses.icon, sizeClasses.icon)}
            />
          </div>
          <span className={twMerge(baseClasses.text, sizeClasses.text)}>
            새 작업
          </span>
        </button>
      )}
    </div>
  );
}
