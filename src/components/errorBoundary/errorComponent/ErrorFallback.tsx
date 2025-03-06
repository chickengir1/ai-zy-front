import { FallbackProps } from "react-error-boundary";
import { Link } from "react-router-dom";
import { FaExclamationCircle, FaHome, FaRedoAlt } from "react-icons/fa";

export default function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-xl">
        <FaExclamationCircle size={32} className="mx-auto mb-2 text-red-500" />
        <h1 className="mb-4 text-xl font-bold text-gray-800">
          오류가 발생했어요
        </h1>
        <p className="mb-8 text-gray-600">
          죄송합니다. 문제가 발생했습니다. 다시 시도하거나 메인 페이지로
          이동해주세요.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={resetErrorBoundary}
            className="flex items-center justify-center rounded-md bg-red-500 px-4 py-2 text-white transition duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <FaRedoAlt size={16} className="mr-2" />
            다시 시도
          </button>
          <Link
            to="/project"
            className="flex items-center justify-center rounded-md bg-gray-200 px-4 py-2 text-gray-700 transition duration-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            <FaHome size={16} className="mr-2" />
            메인 페이지로 이동
          </Link>
        </div>
      </div>
    </div>
  );
}
