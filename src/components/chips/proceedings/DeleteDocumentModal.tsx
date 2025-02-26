import { useDeleteProceeding } from "@/hooks/api/proceedings/useProceedings";
import { DeleteModalStyles } from "@/utils/styles/globalStyeld";
import { useDeleteItems } from "@/hooks/utility/useDeleteItems";

interface DeleteDocumentModalProps {
  onClose: () => void;
  projectId: string;
  documentId: string;
}

export default function DeleteDocumentModal({
  onClose,
  projectId,
  documentId,
}: DeleteDocumentModalProps) {
  const { state, text, actions } = useDeleteItems(onClose);
  const { isDeleteDisabled, isDeleting } = state;
  const { handleDelete, handleConfirmTextChange } = actions;
  const { requiredText, confirmText } = text;

  const deleteProceedingMutation = useDeleteProceeding(projectId, documentId);

  function handleDeleteButtonClick() {
    const path = `/projects/${projectId}`;
    handleDelete(() => deleteProceedingMutation.mutateAsync(), path);
  }

  return (
    <div className={DeleteModalStyles.container}>
      <h3 className={DeleteModalStyles.title}>회의록 삭제</h3>
      <p className={DeleteModalStyles.description}>
        {"이 회의록을 삭제하시겠습니까?"}
        {"\n이 작업은 되돌릴 수 없으며 모든 내용이 영구적으로 삭제됩니다."}
      </p>
      <div className={DeleteModalStyles.confirmContainer}>
        <p className={DeleteModalStyles.confirmText}>
          삭제를 확인하려면 아래에 <strong>"{requiredText}"</strong>를
          입력하세요.
        </p>
        <input
          type="text"
          className={DeleteModalStyles.confirmInput}
          value={confirmText}
          onChange={handleConfirmTextChange}
          placeholder={requiredText}
        />
      </div>
      <div className={DeleteModalStyles.buttonContainer}>
        <button
          onClick={onClose}
          disabled={isDeleting}
          className={`${DeleteModalStyles.button} ${DeleteModalStyles.cancelButton}`}
        >
          취소
        </button>
        <button
          onClick={handleDeleteButtonClick}
          disabled={isDeleteDisabled}
          className={`${DeleteModalStyles.button} ${DeleteModalStyles.deleteButton}`}
        >
          {isDeleting ? "삭제 중..." : "삭제하기"}
        </button>
      </div>
    </div>
  );
}
