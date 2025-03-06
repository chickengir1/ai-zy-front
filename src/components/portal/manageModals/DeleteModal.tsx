import { useDeleteItems } from "@/hooks/utility/common/useDeleteItems";
import { DeleteModalStyles } from "@/utils/styles/global";

interface DeleteModalProps {
  onClose: () => void;
  title: string;
  description: string;
  path: string;
  redirectPath: string;
  deleteFunction: () => Promise<unknown>;
}

export default function DeleteModal({
  onClose,
  title,
  description,
  path,
  redirectPath,
  deleteFunction,
}: DeleteModalProps) {
  const { state, text, actions } = useDeleteItems(onClose);
  const { isDeleteDisabled, isDeleting } = state;
  const { handleConfirmTextChange, handleDeleteButtonClick } = actions;
  const { requiredText, confirmText } = text;

  function handleDelete() {
    handleDeleteButtonClick(path, redirectPath, deleteFunction);
  }

  return (
    <div className={DeleteModalStyles.container}>
      <h3 className={DeleteModalStyles.title}>{title}</h3>
      <p className={DeleteModalStyles.description}>{description}</p>
      <div className={DeleteModalStyles.confirmContainer}>
        <p className={DeleteModalStyles.confirmText}>
          삭제를 확인하려면 아래에 <strong>"{requiredText}"</strong>를
          입력하세요.
        </p>
        <input
          autoFocus
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
          onClick={handleDelete}
          disabled={isDeleteDisabled}
          className={`${DeleteModalStyles.button} ${DeleteModalStyles.deleteButton}`}
        >
          {isDeleting ? "삭제 중..." : "삭제하기"}
        </button>
      </div>
    </div>
  );
}
