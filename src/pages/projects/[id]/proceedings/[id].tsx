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
      <Header title="프로젝트 문서 상세 페이지" />
      <div className="m-4 flex items-center justify-center">
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
