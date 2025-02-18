import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import Toastify from "@/components/ui/toast/Toastify";
import { showSuccessToast, showErrorToast } from "@/utils/helpers/toastUtils";
import { MdCancel } from "react-icons/md";
import Modal from "@/components/portal/modal/Modal";
import { useNavigate } from "react-router-dom";
import {
  DocumentClasses,
  UnitClasses,
  SidebarClasses,
} from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";

interface Document {
  title: string;
  content: string;
  date: string;
  participants: string[];
}

export default function MarkdownEditor() {
  // TODO : 폼 제출 성공일때 proceedings 페이지로 이동
  // NOTE : 훅 2개, 제출 폼, 원래 문서 내용 가져오기는 훅
  // -------------------------------------------------------------------------
  const MOCK_PARTICIPANTS: string[] = ["김철수", "이영희", "박영수"];
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [document, setDocument] = useState<Document>({
    title: "",
    content: "",
    date: new Date().toISOString(),
    participants: MOCK_PARTICIPANTS,
  });

  function isDocumentValid(doc: Document): boolean {
    const isTitleEmpty = !doc.title.trim();
    const isContentEmpty = !doc.content.trim();
    return !(isTitleEmpty || isContentEmpty);
  }

  function updateDocumentField<K extends keyof Document>(
    key: K,
    value: Document[K]
  ) {
    setDocument((prev) => ({ ...prev, [key]: value }));
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateDocumentField("title", e.target.value);
  }

  function handleEditorChange(value: string | undefined) {
    updateDocumentField("content", value || "");
  }

  function resetDocument() {
    setDocument({
      title: "",
      content: "",
      date: new Date().toISOString(),
      participants: MOCK_PARTICIPANTS,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("작성한 문서 내역", document);

    const isValidDocument = isDocumentValid(document);

    if (isValidDocument) {
      showSuccessToast("성공적으로 제출되었습니다!");
      resetDocument();
      return;
    }
    if (!isValidDocument) {
      showErrorToast("제목과 내용을 작성해주세요.", { autoClose: 2000 });
      return;
    }
  }
  // -------------------------------------------------------------------------

  function handleCancelWriting() {
    setIsModalOpen(true);
  }

  function handleContinueWriting() {
    setIsModalOpen(false);
  }

  function onNavigate() {
    navigate(-1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={twMerge(DocumentClasses.container)}>
        <div>
          <div className="flex items-center justify-between">
            <p className="mb-3 text-lg font-semibold text-gray-800">
              회의록 제목
            </p>
            <button type="button" onClick={handleCancelWriting}>
              <MdCancel size={24} className="-mt-4 text-red-500" />
            </button>
          </div>
          <input
            autoFocus
            type="text"
            placeholder="회의록 제목 작성"
            className={twMerge(
              SidebarClasses.inputClasses,
              SidebarClasses.inputFocus,
              SidebarClasses.listClasses
            )}
            value={document.title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <p className="mb-3 text-lg font-semibold text-gray-800">
            회의록 작성
          </p>
          <div
            data-color-mode="light"
            className="rounded-lg border border-gray-200 shadow-sm"
          >
            <MDEditor
              height={400}
              value={document.content}
              onChange={handleEditorChange}
              preview="edit"
              hideToolbar={false}
              className="rounded-lg"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
        </div>
        <button type="submit" className={twMerge(UnitClasses.button)}>
          제출하기
        </button>
        <Toastify
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleContinueWriting}
        title="회의록 작성 취소"
      >
        <div className="mb-6">
          <p className="text-gray-600">회의록 작성을 취소하시겠습니까?</p>
          <p className="text-gray-600">작성한 내용은 저장되지 않습니다.</p>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={handleContinueWriting}
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            계속 작성하기
          </button>
          <button
            onClick={onNavigate}
            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            취소
          </button>
        </div>
      </Modal>
    </form>
  );
}
