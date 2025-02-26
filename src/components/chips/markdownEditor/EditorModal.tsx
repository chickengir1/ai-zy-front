import { useNavigation } from "@/hooks/utility/useNavigation";
import Modal from "@/components/portal/modal/Modal";

interface EditorModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

export default function EditorModal({
  isModalOpen,
  onClose,
}: EditorModalProps) {
  const { goBack } = useNavigation();

  return (
    <Modal isOpen={isModalOpen} onClose={onClose} title="회의록 작성 취소">
      <div className="mb-6">
        <p className="text-gray-600">회의록 작성을 취소하시겠습니까?</p>
        <p className="text-gray-600">작성한 내용은 저장되지 않습니다.</p>
      </div>
      <div className="flex justify-end space-x-3">
        <button
          onClick={onClose}
          className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          계속 작성하기
        </button>
        <button
          onClick={goBack}
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          취소
        </button>
      </div>
    </Modal>
  );
}
