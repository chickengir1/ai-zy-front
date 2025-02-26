import { authConfig } from "@/utils/helpers/authConfig";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";

export function useAuthguard() {
  const hasRedirected = useRef(false);
  const { isAuthenticated, isLoading, loginWithRedirect, error } = useAuth0();

  useEffect(() => {
    const locationPath = window.location.pathname;
    const redirectUriPath = new URL(authConfig.redirectUri).pathname;

    const isCallbackPath = locationPath === redirectUriPath;

    if (
      !isLoading &&
      !isCallbackPath &&
      (error || !isAuthenticated) &&
      !hasRedirected.current
    ) {
      hasRedirected.current = true;

      loginWithRedirect({
        appState: { returnTo: locationPath },
      });
    }
  }, [isLoading, isAuthenticated, error, loginWithRedirect]);

  return { isAuthenticated, isLoading, error };
}
