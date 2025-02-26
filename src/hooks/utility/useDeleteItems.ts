import { useToast } from "@/providers/ToastProvider";
import { useState } from "react";
import { useNavigation } from "./useNavigation";

export function useDeleteItems(onClose: () => void) {
  const [confirmText, setConfirmText] = useState(""); // NOTICE: Store에서 전역 상태로 관리
  const [isDeleting, setIsDeleting] = useState(false); // NOTICE: Store에서 전역 상태로 관리

  const { showSuccess, showError } = useToast();
  const { goTo } = useNavigation();

  const requiredText = "삭제합니다";
  const isDeleteDisabled = confirmText !== requiredText || isDeleting;

  async function handleDelete<T>(
    deleteFunction: () => Promise<T>,
    path: string
  ) {
    if (isDeleteDisabled) return;

    try {
      setIsDeleting(true);
      await deleteFunction();
      handleDeleteSuccess(path);
    } catch (error) {
      handleDeleteError(error);
    } finally {
      setIsDeleting(false);
    }
  }

  function handleDeleteSuccess(path: string) {
    showSuccess("삭제되었습니다.");
    onClose();
    goTo(path);
  }

  function handleDeleteError(error: unknown) {
    showError(error instanceof Error ? error.message : "알 수 없는 오류");
  }

  function handleConfirmTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setConfirmText(e.target.value);
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
      handleDelete,
      handleConfirmTextChange,
    },
  };
}
