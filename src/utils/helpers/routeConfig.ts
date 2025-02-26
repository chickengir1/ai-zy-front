interface RouteConfig {
  path: string;
  shouldShowHeader: boolean;
}

interface Tab {
  id: number;
  label: string;
  value: string;
}

export const HEADER_ROUTES: RouteConfig[] = [
  { path: "/", shouldShowHeader: true },
  { path: "/project", shouldShowHeader: true },
  { path: "/projects", shouldShowHeader: true },
  { path: "/projects/:id", shouldShowHeader: true },
  { path: "/projects/:id/proceedings", shouldShowHeader: true },
  { path: "/projects/:id/proceedings/:id", shouldShowHeader: true },
  { path: "/projects/:id/proceedings/writes", shouldShowHeader: true },
  { path: "/projects/:id/todolist", shouldShowHeader: true },
];

export const tabs: Tab[] = [
  { id: 0, label: "회의내역", value: "proceedings" },
  { id: 1, label: "일정관리", value: "todolist" },
];
export function isValidTabIndex(tabIndex: number): boolean {
  return tabIndex >= 0 && tabIndex < tabs.length;
}

export function getChangeTab(tabId: number, currentTabIndex: number) {
  const baseClasses =
    "rounded-md px-6 py-2 text-xs md:text-sm font-medium transition-colors";
  return tabId === currentTabIndex
    ? `${baseClasses} bg-white text-[#343434] shadow-sm`
    : `${baseClasses} text-gray-600 hover:text-gray-900`;
}
