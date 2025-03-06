declare namespace Proceeding {
  export interface Proceeding {
    title: string;
    content: string;
    date: string;
    attendees: string[];
    tag: string;
  }

  export interface ProceedingFormProps {
    attendees: string[];
    tag: string;
    initialData?: Partial<Proceeding>;
  }

  export interface ProceedingFormState {
    proceedingForm: Proceeding;
    actions: {
      setProceedingForm: (proceedingForm: Proceeding) => void;
      resetProceedingForm: () => void;
    };
  }

  export interface ProceedingDetail {
    proceedingsId: string;
    title: string;
    contents: string;
    attendeeNames: string[];
    tags: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  }

  export interface ProceedingDetailState {
    proceedingDetail: ProceedingDetail;
    actions: {
      setProceedingDetail: (detail: ProceedingDetail) => void;
      resetProceedingDetail: () => void;
    };
  }

  export type ProceedingKey = keyof Proceeding;
}
