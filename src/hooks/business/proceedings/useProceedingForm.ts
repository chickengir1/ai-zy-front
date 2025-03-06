import { useLocation } from "react-router-dom";
import { useProceedingFormHandlers } from "@/hooks/business/proceedings/useProceedingFormHandlers";
import { useProceedingFormState } from "@/hooks/business/proceedings/useProceedingFormState";
import { useProceedingSubmission } from "@/hooks/business/proceedings/useProceedingSubmission";
import { useParamsId } from "@/hooks/utility/common/useParams";
import { useProceedingDetailStore } from "@/store/proceedings/proceedingStore";
import { useProjectCollectionStore } from "@/store/proceedings/projectCollectionStore";

export function useProceedingForm() {
  const { projects } = useProjectCollectionStore();
  const id = useParamsId();

  const currentProject = projects.find((project) => project.id === id);
  const attendees = currentProject ? currentProject.attendeeNames : [];

  const { proceedingDetail } = useProceedingDetailStore();

  const proceeding = proceedingDetail.proceedingsId;

  const query = new URLSearchParams(useLocation().search);
  const proceedingId = query.get("proceedingId");
  const isEditMode = !!proceedingId;

  const proceedingStateProps = {
    proceedingDetail,
    isEditMode,
  };

  const { state, handler, action } =
    useProceedingFormState(proceedingStateProps);
  const { proceedingForm } = state;
  const { resetProceedingForm } = action;
  const { handleFieldChange } = handler;

  const { value, tag, editor } = useProceedingFormHandlers(handleFieldChange);
  const { handleValueChange } = value;
  const { handleTagChange } = tag;
  const { handleEditorChange } = editor;

  const submissionProps = {
    id,
    isEditMode,
    proceeding,
    proceedingForm,
    attendees,
    resetProceedingForm,
  };

  const { handleSubmit } = useProceedingSubmission(submissionProps);

  return {
    proceedingState: { proceedingForm, attendees, isEditMode },
    proceedingHandler: {
      handleValueChange,
      handleEditorChange,
      handleTagChange,
    },
    proceedingAction: { handleSubmit },
  };
}
