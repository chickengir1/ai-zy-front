import { ReactNode } from "react";

export default function ModalOverlay({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {children}
    </div>
  );
}
