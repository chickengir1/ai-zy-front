import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import Toastify from "@/components/ui/toast/Toastify";
import { showSuccessToast, showErrorToast } from "@/utils/helpers/toastUtils";
import { MdCancel } from "react-icons/md";
import Modal from "@/components/portal/modal/Modal";
import { useNavigate } from "react-router-dom";

interface Document {
  title: string;
  content: string;
  date: string;
  participants: string[];
}

// TODO : 월요일에 코드 분리할 것
// NOTE : 훅 2개, 제출 폼, 원래 문서 내용 가져오기는 훅

export default function MarkdownEditor() {
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

  function handleEditorChange(value: string) {
    updateDocumentField("content", value);
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
  function handleCancel() {
    setIsModalOpen(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto max-w-2xl space-y-6 rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
        <div>
          <div className="flex items-center justify-between">
            <label className="mb-3 block text-lg font-semibold text-gray-800">
              회의록 제목
            </label>
            <button type="button" onClick={handleCancel}>
              <MdCancel size={24} className="-mt-4 text-red-500" />
            </button>
          </div>
          <input
            type="text"
            placeholder="회의록 제목 작성"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-700 outline-none"
            value={document.title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label className="mb-3 block text-lg font-semibold text-gray-800">
            회의록 작성
          </label>
          <div
            data-color-mode="light"
            className="rounded-lg border border-gray-200 shadow-sm"
          >
            <MDEditor
              height={400}
              value={document.content}
              onChange={(value) => handleEditorChange(value || "")}
              preview="edit"
              hideToolbar={false}
              className="rounded-lg"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-white transition-colors hover:bg-indigo-700"
        >
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
        onClose={() => setIsModalOpen(false)}
        title="회의록 작성 취소"
      >
        <div className="mb-6">
          <p className="text-gray-600">회의록 작성을 취소하시겠습니까?</p>
          <p className="text-gray-600">작성한 내용은 저장되지 않습니다.</p>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={() => setIsModalOpen(false)}
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            계속 작성하기
          </button>
          <button
            onClick={() => navigate(-1)}
            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            취소
          </button>
        </div>
      </Modal>
    </form>
  );
}
