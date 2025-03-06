import { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { authConfig } from "@/providers/auth/authConfig";

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
