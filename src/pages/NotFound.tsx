import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="animate-fade-in flex h-screen flex-col items-center justify-center bg-gray-100 text-center">
      <FaExclamationTriangle className="mb-4 text-6xl text-red-500 drop-shadow-md" />
      <h1 className="text-4xl font-bold text-gray-800 drop-shadow-md">404</h1>
      <p className="mt-2 text-lg text-gray-600">페이지를 찾을 수 없어요.</p>
      <p className="mb-6 text-gray-500">주소를 확인하거나 홈으로 이동하세요.</p>
      <Link
        to="/"
        className="flex items-center gap-2 rounded-lg bg-gray-700 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-gray-800 hover:shadow-xl"
      >
        <FaHome />
        메인 페이지로 이동
      </Link>
    </div>
  );
}
