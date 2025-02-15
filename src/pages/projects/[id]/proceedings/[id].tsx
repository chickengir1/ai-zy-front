import Header from "@/components/layout/Header";
import Document from "@/components/chips/proceedings/document/Document";
import { content } from "@/utils/constants";
import { useNavigate, useParams } from "react-router-dom";

// TODO : Content가 없을때 예외 처리
export default function DocDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleSettingOpen() {
    navigate(`/projects/${id}/proceedings/writes`);
  }

  return (
    <div>
      <div className="sticky top-0 z-10 bg-white">
        <Header title="프로젝트 문서 상세 페이지" />
      </div>
      {/*검색창 공용 컴포넌트 - 회의내역 검색하고 해당 글자로 이동*/}
      <div className="m-4 flex flex-col items-center justify-center gap-4 border-8">
        <input type="text" />
        <button>검색</button>
      </div>
      <div className="m-4 mb-16 flex items-center justify-center">
        <Document
          title="프로젝트 A 킥오프 미팅"
          date="2025-02-12"
          participantCount={10}
          participantNames={["김철수", "이영희", "박영수", "최영미", "정영희"]}
          content={content}
          onClickSetting={handleSettingOpen}
        />
      </div>
    </div>
  );
}
