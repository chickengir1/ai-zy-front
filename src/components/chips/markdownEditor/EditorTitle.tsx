import { MdCancel } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { SidebarStyles } from "@/utils/styles/global";
import { useProceedingForm } from "@/hooks/business/proceedings/useProceedingForm";

interface EditorTitleProps {
  openModal: () => void;
}

export default function EditorTitle({ openModal }: EditorTitleProps) {
  const { proceedingState, proceedingHandler } = useProceedingForm();
  const { proceedingForm } = proceedingState;
  const { handleValueChange } = proceedingHandler;

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
        maxLength={20}
        placeholder="회의록 제목 작성"
        className={twMerge(
          SidebarStyles.inputClasses,
          SidebarStyles.inputFocus,
          SidebarStyles.listClasses
        )}
        value={proceedingForm.title}
        onChange={handleValueChange("title")}
      />
    </div>
  );
}
