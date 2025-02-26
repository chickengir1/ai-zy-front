declare namespace Docs {
  export interface Document {
    title: string;
    content: string;
    date: string;
    attendees: string[];
    tag: string;
  }

  export interface DocumentFormProps {
    attendees: string[];
    tag: string;
    initialData?: Partial<Document>;
  }

  export interface DocumentFormState {
    documentForm: Document;
    actions: {
      setDocumentForm: (documentForm: Document) => void;
      resetDocumentForm: () => void;
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

  export type DocumentKey = keyof Document;
}
