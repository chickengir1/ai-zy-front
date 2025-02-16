import { Location } from "react-router-dom";

interface RouteConfig {
  path: string;
  shouldShowHeader: boolean;
}

export const HEADER_ROUTES: RouteConfig[] = [
  { path: "/", shouldShowHeader: true },
  { path: "/projects", shouldShowHeader: true },
  { path: "/projects/:id", shouldShowHeader: true },
  { path: "/projects/:id/proceedings", shouldShowHeader: true },
  { path: "/projects/:id/proceedings/:id", shouldShowHeader: true },
  { path: "/projects/:id/proceedings/writes", shouldShowHeader: true },
  { path: "/projects/:id/todolist", shouldShowHeader: true },
];

export const tabs = [
  { id: "proceedings", label: "회의내역" },
  { id: "todolist", label: "일정관리" },
];

export function getActiveTab(
  tabs: { id: string; label: string }[],
  location: Location
): string {
  const segments = location.pathname.split("/");
  const tabId = segments[segments.indexOf("projects") + 2];
  return tabs.find((tab) => tab.id === tabId)?.id || "proceedings";
}
