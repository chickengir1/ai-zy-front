import { useParamsValues } from "@/hooks/utility/useParams";
import { useParams } from "react-router-dom";
import { useProjectStore } from "@/store/projectStore";
import { useDocumentFormState } from "@/hooks/ui/proceedings/useDocumentFormState";
import { useProceedingDetailStore } from "@/store/documentStore";
import { useDocumentSubmission } from "@/hooks/ui/proceedings/useDocumentSubmission";
import { useDocumentFormHandlers } from "@/hooks/ui/proceedings/useDocumentFormHandlers";

export function useDocumentForm() {
  const { proceedingDetail } = useProceedingDetailStore();
  const { projects } = useProjectStore();

  const { id: projectId } = useParams();
  const id = projectId ?? "";
  const docId = useParamsValues("docId");
  const isEditMode = !!docId;

  const currentProject = projects.find((project) => project.id === id);
  const attendees = currentProject ? currentProject.attendeeNames : [];
  const proceeding = proceedingDetail.proceedingsId;

  const documentStateProps = {
    isEditMode,
    proceedingDetail,
  };

  const { state, handler, action } = useDocumentFormState(documentStateProps);
  const { documentForm } = state;
  const { resetDocumentForm } = action;
  const { handleFieldChange } = handler;

  const { value, tag, editor } = useDocumentFormHandlers(handleFieldChange);
  const { handleValueChange } = value;
  const { handleTagChange } = tag;
  const { handleEditorChange } = editor;

  const submissionProps = {
    id,
    isEditMode,
    proceeding,
    documentForm,
    attendees,
    resetDocumentForm,
  };

  const { handleSubmit } = useDocumentSubmission(submissionProps);

  return {
    docsState: { documentForm },
    docsHandler: { handleValueChange, handleEditorChange, handleTagChange },
    docsAction: { handleSubmit },
  };
}
