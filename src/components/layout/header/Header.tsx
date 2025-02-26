import { HEADER_ROUTES } from "@/utils/helpers/routeConfig";
import { useMatch } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { HeaderClassesStyles } from "@/utils/styles/globalStyeld";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigation } from "@/hooks/utility/useNavigation";

interface HeaderProps {
  title: string;
  className?: string;
}

function shouldDisplayHeader(): boolean {
  return HEADER_ROUTES.some((route) => {
    const match = useMatch(route.path);
    return match && route.shouldShowHeader;
  });
}

export default function Header({ title, className }: HeaderProps) {
  const { goBack } = useNavigation();
  const shouldHideButton =
    location.pathname === "/" || location.pathname === "/projects";

  function handleNavigation() {
    if (!shouldHideButton) {
      goBack();
    }
  }

  return (
    <header
      className={twMerge(
        "flex w-full items-center justify-between bg-white px-4 py-4 shadow-md",
        HeaderClassesStyles.headerResponsive,
        className
      )}
    >
      <div className="flex w-full items-center justify-between">
        {shouldDisplayHeader() && (
          <h1
            className={twMerge(
              HeaderClassesStyles.headerClasses,
              "font-bold text-indigo-700"
            )}
          >
            {title}
          </h1>
        )}
        {!shouldHideButton && (
          <button
            onClick={handleNavigation}
            className={HeaderClassesStyles.button}
          >
            <IoArrowBackOutline
              size={20}
              className={HeaderClassesStyles.icon}
            />
            <span className={HeaderClassesStyles.text}>뒤로가기</span>
          </button>
        )}
      </div>
    </header>
  );
}
