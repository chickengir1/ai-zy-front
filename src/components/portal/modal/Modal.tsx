import { ReactNode } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";
import ModalOverlay from "./Overlay";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <ModalOverlay>
      <ModalContent onClose={onClose} title={title}>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root") as HTMLElement
  );
}
