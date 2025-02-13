import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";
import RouteConfig from "vite-plugin-pages-router";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouteConfig />
    </QueryClientProvider>
  );
}

export default App;
