import Header from "@/components/layout/header/Header";
import Document from "@/components/chips/proceedings/Document";
import { content } from "@/utils/constants";
import { useParams } from "react-router-dom";
import {
  DocumentClassesStyles,
  UnitClassesStyles,
} from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";
import { useNavigation } from "@/hooks/utility/useNavigation";

// TODO : Content가 없을때 예외 처리
export default function DocDetailPage() {
  const { id } = useParams();
  const { goTo } = useNavigation();

  function handleSettingOpen() {
    goTo(`/projects/${id}/proceedings/writes`);
  }

  return (
    <div>
      <div className={twMerge(UnitClassesStyles.header)}>
        <Header title="프로젝트 문서 상세 페이지" />
      </div>
      <div className={twMerge(DocumentClassesStyles.layoutClasses)}>
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
