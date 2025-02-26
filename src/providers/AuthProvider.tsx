import { ReactNode, useEffect } from "react";
import { Auth0Provider, AppState, useAuth0 } from "@auth0/auth0-react";
import LoadingPulse from "@/components/ui/loading/Pulse";
import { useAuthguard } from "@/hooks/utility/useAuthguard";
import { authConfig, authParams } from "@/utils/helpers/authConfig";
import { useAuthStore } from "@/store/AuthStore";
import { setGetAccessTokenSilently } from "@/utils/helpers/authConfig";

function AuthGuard({ children }: { children: ReactNode }) {
  const { isLoading } = useAuthguard();
  const { getAccessTokenSilently } = useAuth0();
  const { setAccessToken } = useAuthStore();

  useEffect(() => {
    if (!isLoading) {
      getAccessTokenSilently().then((token) => {
        setAccessToken(token);
      });
    }
    setGetAccessTokenSilently(getAccessTokenSilently);
  }, [isLoading, getAccessTokenSilently, setAccessToken]);

  if (isLoading) {
    return <LoadingPulse />;
  }

  return <>{children}</>;
}

function AuthProvider({ children }: { children: ReactNode }) {
  const { domain, clientId } = authConfig;

  const redirectCallback = (appState?: AppState) => {
    window.history.replaceState(
      {},
      "",
      appState?.returnTo || window.location.pathname
    );
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={authParams}
      useRefreshTokens={true}
      onRedirectCallback={redirectCallback}
    >
      <AuthGuard>{children}</AuthGuard>
    </Auth0Provider>
  );
}

export default AuthProvider;
