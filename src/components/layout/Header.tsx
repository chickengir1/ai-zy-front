import { HEADER_ROUTES } from "@/utils/helpers/routeConfig";
import { useMatch } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { HeaderClasses } from "@/utils/styles/globalStyeld";
import { IoArrowBackCircleOutline } from "react-icons/io5";
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
    if (shouldHideButton) {
      return;
    }
    goBack();
  }

  return (
    <header
      className={twMerge(
        "flex w-full items-center justify-between bg-white px-2 py-4 shadow-md",
        HeaderClasses.headerResponsive,
        className
      )}
    >
      <div className="flex w-full items-center justify-between">
        {shouldDisplayHeader() && (
          <h1 className={HeaderClasses.headerClasses}>{title}</h1>
        )}
        {!shouldHideButton && (
          <button
            onClick={handleNavigation}
            className={twMerge(HeaderClasses.backButton)}
          >
            <IoArrowBackCircleOutline
              size={24}
              className={HeaderClasses.backButtonIcon}
            />
            <p className="text-base font-semibold">Back</p>
          </button>
        )}
      </div>
    </header>
  );
}
