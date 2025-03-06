import { useState } from "react";
import { useToast } from "@/providers/toast/ToastProvider";
import { useNavigation } from "../navigation/useNavigation";

export function useDeleteItems(onClose: () => void) {
  const [confirmText, setConfirmText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const { showSuccess, showError } = useToast();
  const { goTo } = useNavigation();

  const requiredText = "삭제합니다";
  const isDeleteDisabled = confirmText !== requiredText || isDeleting;

  function handleDelete<T>(deleteFunction: () => Promise<T>, path: string) {
    if (isDeleteDisabled) return Promise.resolve();

    setIsDeleting(true);

    return deleteFunction()
      .then(() => handleDeleteSuccess(path))
      .catch((error) => handleDeleteError(error))
      .finally(() => setIsDeleting(false));
  }

  function handleDeleteSuccess(path: string) {
    showSuccess("삭제되었습니다.");
    onClose();
    goTo(path);
  }

  function handleDeleteError(error: Error) {
    showError(error.message || "삭제에 실패했습니다.");
  }

  function handleConfirmTextChange(e: Event.InputEventType) {
    setConfirmText(e.target.value);
  }

  async function handleDeleteButtonClick(
    path: string,
    redirectPath: string,
    deleteFunction: () => Promise<unknown>
  ) {
    await handleDelete(deleteFunction, path).then(() => {
      goTo(redirectPath);
    });
  }

  return {
    state: {
      isDeleteDisabled,
      isDeleting,
    },
    text: {
      requiredText,
      confirmText,
    },
    actions: {
      handleConfirmTextChange,
      handleDelete,
      handleDeleteButtonClick,
    },
  };
}
