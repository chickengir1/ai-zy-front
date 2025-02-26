import { create } from "zustand";

interface ProceedingMap {
  id: string;
  name: string;
}

interface ProceedingMapState {
  proceedingMap: ProceedingMap[];
  setProceedingMap: (proceedingMap: ProceedingMap[]) => void;
}

export const useProceedingMapStore = create<ProceedingMapState>((set) => ({
  proceedingMap: [],
  setProceedingMap: (proceedingMap) => set({ proceedingMap }),
}));
