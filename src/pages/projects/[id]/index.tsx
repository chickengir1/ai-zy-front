import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import MeetingCard from "@/components/chips/proceedings/MeetingCard";
import CreationItem from "@/components/chips/CreationItem";

export default function ProjectPage() {
  const { id } = useParams();
  const fetchdataMeetingCardLendgth = 5;

  return (
    <div>
      <Header title="프로젝트 페이지" />
      {/*검색창 공용 컴포넌트*/}
      <div className="m-4 flex flex-col items-center justify-center gap-4 border-8">
        <input type="text" />
        <button>검색</button>
      </div>
      <div className="m-16 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center gap-12">
        {Array.from({ length: fetchdataMeetingCardLendgth }).map((_, index) => (
          <MeetingCard
            key={`meeting-id-${index}`}
            participantCount={10}
            name="프로젝트 이름"
            createdAt="2024-01-01"
            description="프로젝트 설명"
            tag="태그"
            linkTo={`/projects/${id}/proceedings/${index + 1}`}
          />
        ))}
        <CreationItem path={`/projects/${id}/proceedings/writes`} />
      </div>
    </div>
  );
}
