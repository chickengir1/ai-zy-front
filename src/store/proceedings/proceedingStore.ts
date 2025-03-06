import { create } from "zustand";

const initialProceedingForm: Proceeding.Proceeding = {
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

export const useProceedingFormStore = create<Proceeding.ProceedingFormState>(
  (set) => ({
    proceedingForm: initialProceedingForm,
    actions: {
      setProceedingForm: (form: Proceeding.Proceeding) =>
        set({ proceedingForm: form }),
      resetProceedingForm: () => set({ proceedingForm: initialProceedingForm }),
    },
  })
);

export const useProceedingDetailStore =
  create<Proceeding.ProceedingDetailState>((set) => ({
    proceedingDetail: initialProceedingDetail,
    actions: {
      setProceedingDetail: (detail: Proceeding.ProceedingDetail) =>
        set({ proceedingDetail: detail }),
      resetProceedingDetail: () =>
        set({ proceedingDetail: initialProceedingDetail }),
    },
  }));

export const useProceedingActions = () => {
  const { setProceedingForm, resetProceedingForm } =
    useProceedingFormStore().actions;
  const { setProceedingDetail, resetProceedingDetail } =
    useProceedingDetailStore().actions;

  return {
    form: { setProceedingForm, resetProceedingForm },
    detail: { setProceedingDetail, resetProceedingDetail },
  };
};
