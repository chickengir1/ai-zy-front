export function useDocumentFormHandlers(
  handleFieldChange: <K extends Docs.DocumentKey>(
    key: K,
    value: Docs.Document[K]
  ) => void
) {
  function handleValueChange(field: keyof Docs.Document) {
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
