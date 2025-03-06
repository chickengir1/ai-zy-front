import { useToast } from "@/providers/toast/ToastProvider";
import {
  useCreateProceeding,
  useUpdateProceeding,
} from "@/hooks/api/proceedings/useProceedings";
import { useNavigation } from "@/hooks/utility/navigation/useNavigation";
import { tag } from "@/utils/common/constans";
import { validateProceeding } from "@/utils/validation/proceedingValidation";

interface ProceedingSubmissionProps {
  id: string;
  isEditMode: boolean;
  proceeding: string;
  proceedingForm: Proceeding.Proceeding;
  attendees: string[];
  resetProceedingForm: () => void;
}

export function useProceedingSubmission(props: ProceedingSubmissionProps) {
  const {
    id,
    isEditMode,
    proceeding,
    proceedingForm,
    attendees,
    resetProceedingForm,
  } = props;

  const { showSuccess, showError } = useToast();
  const { goTo } = useNavigation();
  const { mutate: createProceeding } = useCreateProceeding(id);
  const { mutate: updateProceeding } = useUpdateProceeding(id, proceeding);

  function handleSubmitSuccess() {
    showSuccess("성공적으로 제출되었습니다!");
    resetProceedingForm();
    goTo(`/projects/${id}`);
  }

  function handleSubmitError(error: Error) {
    const errorMessage = error.message || "처리 중 오류가 발생했습니다.";

    showError(errorMessage);
  }

  function handleFormSubmit() {
    const isProceedingValid = validateProceeding(proceedingForm);

    if (!isProceedingValid) {
      showError("제목과 내용을 작성해주세요.");
      return;
    }

    if (proceedingForm.content.length < 10) {
      showError("내용은 최소 10자 이상이어야 합니다.");
      return;
    }

    if (attendees.length === 0) {
      showError("참석자는 최소 1명 이상이어야 합니다.");
      return;
    }

    const proceedingData = {
      title: proceedingForm.title,
      contents: proceedingForm.content,
      tags: proceedingForm.tag || tag[0],
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
