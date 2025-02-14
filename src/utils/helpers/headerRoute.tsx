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
