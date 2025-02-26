import { create } from "zustand";

const initialDocument: Docs.Document = {
  title: "",
  content: "",
  date: new Date().toISOString(),
  attendees: [],
  tag: "",
};

const initialProceedingDetail = {
  proceedingsId: "",
  title: "",
  contents: "",
  attendeeNames: [],
  tags: "",
  owner: "",
  createdAt: "",
  updatedAt: "",
  deletedAt: "",
};

export const useDocumentStore = create<Docs.DocumentFormState>((set) => ({
  documentForm: initialDocument,
  actions: {
    setDocumentForm: (documentForm: Docs.Document) => set({ documentForm }),
    resetDocumentForm: () => set({ documentForm: initialDocument }),
  },
}));

export const useProceedingDetailStore = create<Docs.ProceedingDetailState>(
  (set) => ({
    proceedingDetail: initialProceedingDetail,
    actions: {
      setProceedingDetail: (detail: Docs.ProceedingDetail) =>
        set({ proceedingDetail: detail }),
      resetProceedingDetail: () =>
        set({ proceedingDetail: initialProceedingDetail }),
    },
  })
);

export const useDocumentActions = () => {
  const { setDocumentForm, resetDocumentForm } = useDocumentStore().actions;
  const { setProceedingDetail, resetProceedingDetail } =
    useProceedingDetailStore().actions;

  return {
    form: { setDocumentForm, resetDocumentForm },
    detail: { setProceedingDetail, resetProceedingDetail },
  };
};
