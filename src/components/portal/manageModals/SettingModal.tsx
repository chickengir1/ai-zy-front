import { useKeyPress } from "@/hooks/utility/toggle/useKeyPress";
import Modal from "@/components/portal/modal/Modal";

interface SettingModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function SettingModal({
  isOpen,
  onClose,
  children,
}: SettingModalProps) {
  useKeyPress({
    targetKey: "s",
    callback: () => onClose(),
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="설정">
      <div>{children}</div>
    </Modal>
  );
}
