import Header from "@/components/layout/Header";
import ProjectCard from "@/components/chips/projects/ProjectCard";
import CreationItem from "@/components/chips/CreationItem";
import MeetingCard from "@/components/chips/proceedings/MeetingCard";
import Modal from "@/components/portal/modal/Modal";
import { useState } from "react";
import Document from "@/components/chips/proceedings/document/Document";
import { content } from "@/utils/constants";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // 테스트용
  const projectId = 1;

  function handleSettingOpen() {
    navigate(`/projects/${projectId}/proceedings/writes`);
  }

  return (
    <div>
      <div className="sticky top-0 z-10">
        <Header title="Ai-Zy 루트페이지" />
      </div>
      <button
        className="m-4 rounded-md bg-gray-500 p-2 text-white"
        onClick={() => setIsOpen(true)}
      >
        모달 열기 테스트 버튼
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>이건 모달입니다.</div>
      </Modal>
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
      <div className="m-4 flex flex-col flex-wrap gap-4 md:flex-row">
        <ProjectCard
          participantCount={10}
          name="프로젝트 이름"
          description="프로젝트 설명"
          gradientFrom="from-black/10"
          gradientTo="to-black/50"
          tag="태그"
          linkTo="/projects"
        />
        <MeetingCard
          participantCount={10}
          name="프로젝트 이름"
          createdAt="2024-01-01"
          description="프로젝트 설명"
          tag="태그"
          linkTo="/projects/1/proceedings/1"
        />
        <CreationItem path="/projects" />
      </div>
    </div>
  );
}
