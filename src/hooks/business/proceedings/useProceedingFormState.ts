/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  useProceedingFormStore,
  useProceedingActions,
} from "@/store/proceedings/proceedingStore";

interface ProceedingDetail {
  title: string;
  contents: string;
  createdAt: string;
  attendeeNames: string[];
  tags: string;
}

interface ProceedingFormStateProps {
  isEditMode: boolean;
  proceedingDetail: ProceedingDetail;
}

export function useProceedingFormState(props: ProceedingFormStateProps) {
  const { proceedingForm } = useProceedingFormStore();
  const { form } = useProceedingActions();
  const { setProceedingForm, resetProceedingForm } = form;

  const { isEditMode, proceedingDetail } = props;

  useEffect(() => {
    if (!isEditMode) {
      resetProceedingForm();
    }

    if (isEditMode) {
      setProceedingForm({
        title: proceedingDetail.title,
        content: proceedingDetail.contents,
        date: proceedingDetail.createdAt,
        attendees: proceedingDetail.attendeeNames,
        tag: proceedingDetail.tags,
      });
    }
  }, [isEditMode]);

  function handleFieldChange<K extends Proceeding.ProceedingKey>(
    key: K,
    value: Proceeding.Proceeding[K]
  ) {
    setProceedingForm({ ...proceedingForm, [key]: value });
  }

  return {
    state: { proceedingForm },
    handler: { handleFieldChange },
    action: { resetProceedingForm },
  };
}
