export function useProceedingFormHandlers(
  handleFieldChange: <K extends Proceeding.ProceedingKey>(
    key: K,
    value: Proceeding.Proceeding[K]
  ) => void
) {
  function handleValueChange(field: keyof Proceeding.Proceeding) {
    return (e: Event.UnionEventType) => {
      const { value } = e.target;
      handleFieldChange(field, value);
    };
  }

  function handleTagChange(e: Event.SelectEventType) {
    handleFieldChange("tag", e.target.value);
  }

  function handleEditorChange(value: string | undefined) {
    handleFieldChange("content", value || "");
  }

  return {
    value: { handleValueChange },
    tag: { handleTagChange },
    editor: { handleEditorChange },
  };
}
