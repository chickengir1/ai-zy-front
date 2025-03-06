import { QueryClientProvider } from "@tanstack/react-query";
import RouteConfig from "vite-plugin-pages-router";
import AuthProvider from "@/providers/auth/AuthProvider";
import { ToastProvider } from "@/providers/toast/ToastProvider";
import useWidthChecker from "@/hooks/utility/media/useWidthChecker";
import { queryClient } from "@/api/queryClient";

function App() {
  useWidthChecker();
  const location = window.location.pathname;

  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        {location === "/" ? (
          <RouteConfig />
        ) : (
          <AuthProvider>
            <RouteConfig />
          </AuthProvider>
        )}
      </QueryClientProvider>
    </ToastProvider>
  );
}

export default App;
