import {
  DocumentClassesStyles,
  UnitClassesStyles,
} from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";
import { useDocumentForm } from "@/hooks/ui/proceedings/useDocumentForm";
import { useToggle } from "@/hooks/utility/useToggle";
import EditorModal from "@/components/chips/markdownEditor/EditorModal";
import EditorHeader from "@/components/chips/markdownEditor/EditorContent";
import EditorTitle from "@/components/chips/markdownEditor/EditorTitle";

export default function MarkdownEditor() {
  const { docsAction } = useDocumentForm();
  const { handleSubmit } = docsAction;
  const [isModalOpen, toggleModal] = useToggle(false);

  function handleCancelWriting() {
    toggleModal();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={twMerge(DocumentClassesStyles.container)}>
        <EditorTitle openModal={handleCancelWriting} />
        <EditorHeader />
        <button type="submit" className={twMerge(UnitClassesStyles.button)}>
          제출하기
        </button>
      </div>
      <EditorModal isModalOpen={isModalOpen} onClose={handleCancelWriting} />
    </form>
  );
}
