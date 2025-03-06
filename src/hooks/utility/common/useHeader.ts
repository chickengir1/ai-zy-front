import { matchPath, useLocation } from "react-router-dom";
import { HEADER_ROUTES } from "@/utils/common/routeConfig";
import { useNavigation } from "@/hooks/utility/navigation/useNavigation";

export function useHeader() {
  const { goBack } = useNavigation();
  const location = useLocation();

  const matches = HEADER_ROUTES.map((route) => ({
    ...route,
    match: matchPath({ path: route.path, end: true }, location.pathname),
  }));

  function shouldHeader(): boolean {
    return matches.some(
      ({ match, shouldShowHeader }) => match && shouldShowHeader
    );
  }

  function getRouteTitle(): string {
    const currentRoute = matches.find(
      ({ match, shouldShowHeader }) => match && shouldShowHeader
    );
    return currentRoute?.title || "Ai-Zy";
  }

  const rootPath = location.pathname === "/";
  const projectPath = location.pathname === "/project";

  const hideButton = rootPath || projectPath;

  function handleNavigation() {
    if (!hideButton) {
      goBack();
    }
  }

  return {
    header: {
      shouldHeader,
      getRouteTitle,
      hideButton,
    },
    handler: {
      handleNavigation,
    },
  };
}
