import { HEADER_ROUTES } from "@/utils/helpers/routeConfig";
import { useMatch } from "react-router-dom";
import { twMerge } from "tailwind-merge";

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
  const headerResponsive = "sm:px-3 sm:py-6 lg:px-4 lg:py-8";
  const headerClasses = twMerge("text-lg sm:text-xl lg:text-2xl", className);

  return (
    <header
      className={`flex w-full items-center justify-between bg-white px-2 py-4 shadow-md ${headerResponsive}`}
    >
      {shouldDisplayHeader() && <h1 className={headerClasses}>{title}</h1>}
    </header>
  );
}
