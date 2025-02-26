import {
  useCreateProceeding,
  useUpdateProceeding,
} from "@/hooks/api/proceedings/useProceedings";
import { useNavigation } from "@/hooks/utility/useNavigation";
import { useToast } from "@/providers/ToastProvider";
import { validateDocument } from "@/utils/validation/documentValidation";

interface DocumentSubmissionProps {
  id: string;
  isEditMode: boolean;
  proceeding: string;
  documentForm: Docs.Document;
  attendees: string[];
  resetDocumentForm: () => void;
}

export function useDocumentSubmission(props: DocumentSubmissionProps) {
  const {
    id,
    isEditMode,
    proceeding,
    documentForm,
    attendees,
    resetDocumentForm,
  } = props;

  const { showSuccess, showError } = useToast();
  const { goTo } = useNavigation();
  const { mutate: createProceeding } = useCreateProceeding(id);
  const { mutate: updateProceeding } = useUpdateProceeding(id, proceeding);

  function handleSubmitSuccess() {
    showSuccess("성공적으로 제출되었습니다!", { position: "bottom-left" });
    resetDocumentForm();
    goTo(`/projects/${id}`);
  }

  function handleSubmitError(error: Error) {
    showError(error.message, { position: "bottom-left" });
  }

  function handleFormSubmit() {
    const isDocumentValid = validateDocument(documentForm);

    if (!isDocumentValid) {
      showError("제목과 내용을 작성해주세요.", { position: "bottom-left" });
      return;
    }

    const proceedingData = {
      title: documentForm.title,
      contents: documentForm.content,
      tags: documentForm.tag || "개발",
      attendees: attendees,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (isEditMode) {
      updateProceeding(proceedingData, {
        onSuccess: handleSubmitSuccess,
        onError: handleSubmitError,
      });
    }

    if (!isEditMode) {
      createProceeding(proceedingData, {
        onSuccess: handleSubmitSuccess,
        onError: handleSubmitError,
      });
    }
  }

  function handleSubmit(e: Event.FormEventType) {
    e.preventDefault();
    handleFormSubmit();
  }

  return {
    handleSubmit,
  };
}
