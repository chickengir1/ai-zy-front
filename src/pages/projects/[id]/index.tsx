import { useParams } from "react-router-dom";
import {
  MainLayoutClassesStyles,
  UnitClassesStyles,
} from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";
import Header from "@/components/layout/header/Header";
import MeetingCard from "@/components/chips/proceedings/MeetingCard";
import CreationItem from "@/components/chips/CreationItem";
import ToggleNav from "@/components/layout/toggle/toggleNav";
import SearchInput from "@/components/ui/search/SearchInput";
import { FETCH_DATA_PROJECT_CARD_LENGTH } from "@/utils/constants";

export default function ProjectPage() {
  const { id } = useParams();

  return (
    <>
      <div className={twMerge(UnitClassesStyles.header)}>
        <Header title="프로젝트 페이지" />
      </div>
      <div>
        <div
          className={twMerge(
            MainLayoutClassesStyles.headerNavPadding,
            "justify-between"
          )}
        >
          <ToggleNav tabIndex={0} />
          <SearchInput
            placeholder="회의 목록을 검색해보세요"
            onClick={() => {
              alert("검색");
            }}
            onChange={() => {}}
          />
        </div>
        <div className={twMerge(MainLayoutClassesStyles.padding)}>
          <div className={twMerge(MainLayoutClassesStyles.grid)}>
            {Array.from({ length: FETCH_DATA_PROJECT_CARD_LENGTH }).map(
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
