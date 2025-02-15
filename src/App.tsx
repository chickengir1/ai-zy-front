import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";
import RouteConfig from "vite-plugin-pages-router";
import useWidthChecker from "./hooks/ui/useWidthChecker";

function App() {
  useWidthChecker();
  return (
    <QueryClientProvider client={queryClient}>
      <RouteConfig />
    </QueryClientProvider>
  );
}

export default App;
