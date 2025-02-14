import { useLocation, useMatch } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
  title?: string;
  className?: string;
}

export default function Header({ title, className }: HeaderProps) {
  const { pathname } = useLocation();
  const match = useMatch("/projects/:id/docs/:Id");

  const headerResponsive = "sm:px-3 sm:py-6 lg:px-4 lg:py-8";
  const headerClasses = twMerge("text-lg sm:text-xl lg:text-2xl", className);

  return (
    <header
      className={`flex w-full items-center justify-between bg-white px-2 py-4 shadow-md ${headerResponsive}`}
    >
      {pathname === "/" && <h1 className={headerClasses}>{title}</h1>}
      {(pathname === "/projects" || pathname.startsWith("/projects/")) &&
        !match && <h1 className={headerClasses}>{title}</h1>}
      {match && <h1 className={headerClasses}>{title}</h1>}
    </header>
  );
}
