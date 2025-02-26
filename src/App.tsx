import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";
import RouteConfig from "vite-plugin-pages-router";
import useWidthChecker from "./hooks/utility/useWidthChecker";
import { ToastProvider } from "./providers/ToastProvider";
import AuthProvider from "./providers/AuthProvider";

function App() {
  useWidthChecker();

  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouteConfig />
        </AuthProvider>
      </QueryClientProvider>
    </ToastProvider>
  );
}

export default App;
