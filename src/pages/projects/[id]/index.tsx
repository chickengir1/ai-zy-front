import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import MeetingCard from "@/components/chips/proceedings/MeetingCard";
import CreationItem from "@/components/chips/CreationItem";
import ToggleNav from "@/components/layout/toggleNav";

export default function ProjectPage() {
  const { id } = useParams();
  const fetchdataMeetingCardLendgth = 5;

  return (
    <>
      <Header title="프로젝트 페이지" />
      <div>
        <div className="flex w-full flex-col items-center justify-between gap-4 px-16 py-4 md:flex-row">
          <ToggleNav />
          <div className="flex items-center gap-2 border-2 border-black p-4">
            <input type="text" />
            <button>검색</button>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center gap-12 px-16 py-4">
          {Array.from({ length: fetchdataMeetingCardLendgth }).map(
            (_, index) => (
              <MeetingCard
                key={`meeting-id-${index}`}
                participantCount={10}
                name="프로젝트 이름"
                createdAt="2024-01-01"
                description="프로젝트 설명"
                tag="태그"
                linkTo={`/projects/${id}/proceedings/${index + 1}`}
              />
            )
          )}
          <CreationItem path={`/projects/${id}/proceedings/writes`} />
        </div>
      </div>
    </>
  );
}
