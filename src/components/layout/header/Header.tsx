import { IoArrowBackOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { HeaderStyles } from "@/utils/styles/global";
import { useHeader } from "@/hooks/utility/common/useHeader";

interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  const { header, handler } = useHeader();
  const { shouldHeader, getRouteTitle, hideButton } = header;
  const { handleNavigation } = handler;

  const routeTitle = getRouteTitle();
  const displayTitle = title || routeTitle;

  return (
    <header
      className={twMerge(
        "justify-between bg-white p-4 shadow-md",
        HeaderStyles.headerResponsive
      )}
    >
      <div className="flex w-full items-center justify-between space-x-2">
        {shouldHeader() && (
          <h1
            className={twMerge(
              HeaderStyles.headerClasses,
              "font-bold text-indigo-700"
            )}
          >
            {displayTitle}
          </h1>
        )}
        {!hideButton && (
          <button
            onClick={handleNavigation}
            className={twMerge(HeaderStyles.button)}
          >
            <IoArrowBackOutline size={20} className={HeaderStyles.icon} />
            <span className={twMerge(HeaderStyles.text, "hidden sm:inline")}>
              뒤로가기
            </span>
          </button>
        )}
      </div>
    </header>
  );
}
