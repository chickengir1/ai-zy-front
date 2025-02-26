import { create } from "zustand";

interface PageStore {
  page: number;
  limit: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  reset: () => void;
}

function getInitialPage() {
  const params = new URLSearchParams(window.location.search);
  const pageParam = params.get("page");
  return pageParam ? Number(pageParam) : 0;
}

export const usePageStore = create<PageStore>((set) => ({
  page: getInitialPage(),
  limit: 7,
  setPage: (page) => set({ page }),
  setLimit: (limit) => set({ limit }),
  reset: () => set({ page: 0 }),
}));
