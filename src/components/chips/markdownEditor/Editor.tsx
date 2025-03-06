import { twMerge } from "tailwind-merge";
import { useToggle } from "@/hooks/utility/toggle/useToggle";
import { ProceedingStyles, UnitStyles } from "@/utils/styles/global";
import EditorHeader from "@/components/chips/markdownEditor/EditorContent";
import EditorModal from "@/components/chips/markdownEditor/EditorModal";
import EditorTitle from "@/components/chips/markdownEditor/EditorTitle";
import { useProceedingForm } from "@/hooks/business/proceedings/useProceedingForm";

export default function MarkdownEditor() {
  const { proceedingAction } = useProceedingForm();
  const { handleSubmit } = proceedingAction;
  const [isModalOpen, toggleModal] = useToggle(false);

  function handleCancelWriting() {
    toggleModal();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={twMerge(ProceedingStyles.container)}>
        <EditorTitle openModal={handleCancelWriting} />
        <EditorHeader />
        <button type="submit" className={twMerge(UnitStyles.button)}>
          제출하기
        </button>
      </div>
      <EditorModal isModalOpen={isModalOpen} onClose={handleCancelWriting} />
    </form>
  );
}
