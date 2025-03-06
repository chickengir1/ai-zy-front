import { useSidebarActions, useSidebarFormStore } from "@/store/sidebarStore";

export function useSidebarFormState() {
  const { form: sidebarFormData } = useSidebarFormStore();
  const { setForm, resetForm } = useSidebarActions();

  function handleFormChange(field: keyof Sidebar.SidebarFormProps) {
    return (value: string) => {
      setForm({ ...sidebarFormData, [field]: value });
    };
  }

  function handleTagSelect(e: Event.SelectEventType) {
    const selectedValue = e.target.value;
    setForm({ ...sidebarFormData, tag: selectedValue });
  }

  return {
    state: {
      sidebarFormData,
    },
    handler: {
      handleFormChange,
      handleTagSelect,
    },
    action: {
      resetForm,
      setForm,
    },
  };
}
