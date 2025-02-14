import { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function ModalContent({
  onClose,
  children,
}: {
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <div className="mx-2 w-full max-w-md rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl sm:p-5 md:p-6">
      <div className="flex items-center justify-between border-b border-gray-300 pb-3">
        <h1 className="text-xl text-gray-800">프로젝트 멤버 관리</h1>
        <button
          onClick={onClose}
          className="cursor-pointer text-gray-500 hover:text-gray-700"
        >
          <AiOutlineClose size={24} />
        </button>
      </div>
      <div className="mt-4 text-gray-700">{children}</div>
    </div>
  );
}
