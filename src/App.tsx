import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";
import RouteConfig from "vite-plugin-pages-router";

function App() {
  return (
    <div className="h-screen bg-[#F7F9FC]">
      <QueryClientProvider client={queryClient}>
        <RouteConfig />
      </QueryClientProvider>
    </div>
  );
}

export default App;
