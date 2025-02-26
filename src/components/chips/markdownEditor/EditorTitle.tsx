import { SidebarClassesStyles } from "@/utils/styles/globalStyeld";
import { useDocumentForm } from "@/hooks/ui/proceedings/useDocumentForm";
import { MdCancel } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface EditorTitleProps {
  openModal: () => void;
}

export default function EditorTitle({ openModal }: EditorTitleProps) {
  const { docsState, docsHandler } = useDocumentForm();
  const { documentForm } = docsState;
  const { handleValueChange } = docsHandler;

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="mb-3 text-lg font-semibold text-gray-800">회의록 제목</p>
        <button type="button" onClick={openModal}>
          <MdCancel size={24} className="-mt-4 text-red-500" />
        </button>
      </div>
      <input
        autoFocus
        type="text"
        placeholder="회의록 제목 작성"
        className={twMerge(
          SidebarClassesStyles.inputClasses,
          SidebarClassesStyles.inputFocus,
          SidebarClassesStyles.listClasses
        )}
        value={documentForm.title}
        onChange={handleValueChange("title")}
      />
    </div>
  );
}
