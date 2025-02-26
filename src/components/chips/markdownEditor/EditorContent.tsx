import MDEditor from "@uiw/react-md-editor";
import { useDocumentForm } from "@/hooks/ui/proceedings/useDocumentForm";
import Select from "@/components/ui/select/Select";
import SelectWrapper from "@/components/ui/select/SelectWrapper";
import { tag } from "@/utils/constants";

export default function EditorHeader() {
  const { docsState, docsHandler } = useDocumentForm();
  const { documentForm } = docsState;
  const { handleEditorChange, handleTagChange } = docsHandler;

  return (
    <>
      <div className="mb-3 flex flex-col items-center justify-between md:flex-row">
        <p className="mb-3 w-full text-lg font-semibold text-gray-800 md:mb-0 md:w-[50%]">
          문서 작성 및 태그 선택
        </p>
        <SelectWrapper>
          <Select
            value={documentForm.tag}
            onChange={handleTagChange}
            options={tag}
          />
        </SelectWrapper>
      </div>
      <div
        data-color-mode="light"
        className="rounded-lg border border-gray-200 shadow-sm"
      >
        <MDEditor
          height={400}
          value={documentForm.content}
          onChange={handleEditorChange}
          preview="edit"
          hideToolbar={false}
        />
      </div>
    </>
  );
}
