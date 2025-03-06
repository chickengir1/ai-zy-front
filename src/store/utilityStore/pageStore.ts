import { create } from "zustand";

interface PageStore {
  page: number;
  setPage: (page: number) => void;
  reset: () => void;
}

function getInitialPage() {
  const params = new URLSearchParams(window.location.search);
  const pageParam = params.get("page");
  return pageParam ? Number(pageParam) : 0;
}

export const usePageStore = create<PageStore>((set) => ({
  page: getInitialPage(),
  setPage: (page) => set({ page }),
  reset: () => set({ page: 0 }),
}));
