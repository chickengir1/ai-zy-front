import { FaExclamationTriangle } from "react-icons/fa";
import { useResizeHandler } from "@/hooks/utility/media/useResizeHandler";
import { useNavigation } from "@/hooks/utility/navigation/useNavigation";
import { MIN_WIDTH } from "@/utils/common/constans";

const Unsupported = () => {
  const { goBack } = useNavigation();

  useResizeHandler(MIN_WIDTH, () => {
    goBack();
  });

  return (
    <div className="mx-4 flex h-screen items-center justify-center">
      <div className="max-w-md rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
        <div className="mb-6 flex justify-center">
          <FaExclamationTriangle size={36} className="text-yellow-500" />
        </div>
        <h1 className="mb-2 font-bold text-gray-800">
          화면 크기가 너무 작습니다.
        </h1>
        <p className="text-sm text-gray-600">
          원활한 사용을 위해 350px 이상의 화면에서 접속해주세요.
        </p>
        <div className="mt-8 h-2 w-full rounded-full bg-gray-200">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-yellow-400 to-red-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Unsupported;
