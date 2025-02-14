import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";
import RouteConfig from "vite-plugin-pages-router";
import useWidthChecker from "./hooks/ui/useWidthChecker";

function App() {
  useWidthChecker();
  return (
    <div className="h-screen bg-[#F7F9FC]">
      <QueryClientProvider client={queryClient}>
        <RouteConfig />
      </QueryClientProvider>
    </div>
  );
}

export default App;
