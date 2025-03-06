import { PageTitles, RoutePaths } from "@/utils/common/constans";

interface RouteConfig {
  path: string;
  shouldShowHeader: boolean;
  title: string;
}

interface Tab {
  id: number;
  label: string;
  value: string;
}

export const HEADER_ROUTES: RouteConfig[] = [
  {
    path: RoutePaths.HOME,
    shouldShowHeader: true,
    title: PageTitles.HOME,
  },
  {
    path: RoutePaths.PROJECT_DASHBOARD,
    shouldShowHeader: true,
    title: PageTitles.PROJECT_DASHBOARD,
  },
  {
    path: RoutePaths.PROJECT_CALLBACK,
    shouldShowHeader: true,
    title: PageTitles.PROJECT_CALLBACK,
  },
  {
    path: RoutePaths.PROJECT_OVERVIEW,
    shouldShowHeader: true,
    title: PageTitles.PROJECT_OVERVIEW,
  },
  {
    path: RoutePaths.PROCEEDING_REPOSITORY,
    shouldShowHeader: true,
    title: PageTitles.PROCEEDING_REPOSITORY,
  },
  {
    path: RoutePaths.TASK_HUB,
    shouldShowHeader: true,
    title: PageTitles.TASK_HUB,
  },
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
