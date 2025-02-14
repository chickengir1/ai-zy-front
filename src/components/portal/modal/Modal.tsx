import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";
import ModalOverlay from "./Overlay";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string; // 아직 애매해서 일단은 추가한 상태
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <ModalOverlay>
      <ModalContent onClose={onClose}>{children}</ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root") as HTMLElement
  );
}
