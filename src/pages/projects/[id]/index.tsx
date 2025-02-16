import { useParams } from "react-router-dom";
import { MainLayoutClasses } from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";
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
        <div
          className={twMerge(
            MainLayoutClasses.headerPadding,
            "justify-between"
          )}
        >
          <ToggleNav />
          <div className="flex items-center gap-2 border-2 border-black p-2">
            <input type="text" />
            <button>검색</button>
          </div>
        </div>
        <div className={twMerge(MainLayoutClasses.padding)}>
          <div className={twMerge(MainLayoutClasses.grid)}>
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
      </div>
    </>
  );
}
