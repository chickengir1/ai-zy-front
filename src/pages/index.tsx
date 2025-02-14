import Header from "@/components/layout/Header";
import ProjectCard from "@/components/chips/projects/ProjectCard";
import CreationItem from "@/components/chips/CreationItem";
import MeetingCard from "@/components/chips/proceedings/MeetingCard";
import Modal from "@/components/portal/modal/Modal";
import { useState } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header title="Ai-Zy 루트페이지" />
      <button
        className="m-4 rounded-md bg-gray-500 p-2 text-white"
        onClick={() => setIsOpen(true)}
      >
        모달 열기 테스트 버튼
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>이건 모달입니다.</div>
      </Modal>
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
