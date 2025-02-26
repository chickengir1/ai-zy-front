import { useDocumentActions, useDocumentStore } from "@/store/documentStore";
import { useEffect } from "react";

export interface ProceedingDetail {
  title: string;
  contents: string;
  createdAt: string;
  attendeeNames: string[];
  tags: string;
}

interface DocumentFormStateProps {
  isEditMode: boolean;
  proceedingDetail: ProceedingDetail;
}

export function useDocumentFormState(props: DocumentFormStateProps) {
  const { documentForm } = useDocumentStore();
  const { form } = useDocumentActions();
  const { setDocumentForm, resetDocumentForm } = form;

  const { isEditMode, proceedingDetail } = props;

  useEffect(() => {
    if (isEditMode) {
      setDocumentForm({
        title: proceedingDetail.title,
        content: proceedingDetail.contents,
        date: proceedingDetail.createdAt,
        attendees: proceedingDetail.attendeeNames,
        tag: proceedingDetail.tags,
      });
    }
    if (!isEditMode) {
      resetDocumentForm();
    }
  }, [isEditMode, proceedingDetail, setDocumentForm, resetDocumentForm]);

  function handleFieldChange<K extends Docs.DocumentKey>(
    key: K,
    value: Docs.Document[K]
  ) {
    setDocumentForm({ ...documentForm, [key]: value });
  }

  return {
    state: { documentForm },
    handler: { handleFieldChange },
    action: { resetDocumentForm },
  };
}
