import { useProceedingDataTransform } from "@/hooks/api/proceedings/useProceedingDataTransform";
import ProceedingCard from "@/components/chips/proceedings/ProceedingCard";
import PageNationButton from "@/components/ui/pagination/PaginationButton";
import CreationItem from "@/components/chips/creationItem/CreationItem";
import { MainLayoutStyles, ProceedingCardStyles } from "@/utils/styles/global";
import { twMerge } from "tailwind-merge";
import ToggleNav from "@/components/ui/toggle/toggleNav";
import SearchInput from "@/components/ui/search/SearchInput";
import { useCommandKey } from "@/hooks/utility/toggle/useCommandKey";
import { Link } from "react-router-dom";
import { proceedingsDataTransform } from "@/utils/common/serverDataTransform";
import { useProceedingsForChatContext } from "@/hooks/api/chat/useProceedingsForChatContext";

export default function ProceedingCardList() {
  const { proceedingItems, projectId } = useProceedingDataTransform();
  const { item, url } = proceedingsDataTransform(proceedingItems, projectId);

  const { chat, project } = useCommandKey();
  const { renderChatInterface, renderChatButton } = chat;
  const { settingProjectButton, settingProjectModal } = project;

  useProceedingsForChatContext(projectId);

  return (
    <>
      <div className={twMerge(MainLayoutStyles.headerNavPadding)}>
        <ToggleNav tabIndex={0} />
        <SearchInput
          placeholder="회의 목록을 검색해보세요"
          items={item}
          dynamicUrl={url}
        />
      </div>
      <div className={twMerge(MainLayoutStyles.padding)}>
        <div className={twMerge(MainLayoutStyles.grid)}>
          {proceedingItems.map((proceeding) => (
            <div
              key={proceeding.proceedingsId}
              className={twMerge(ProceedingCardStyles.layout)}
            >
              <Link
                to={`/projects/${projectId}/proceedings/${proceeding.proceedingsId}`}
              >
                <ProceedingCard
                  participantCount={proceeding.attendeeNames.length}
                  attendeeNames={proceeding.attendeeNames}
                  name={proceeding.title}
                  tag={proceeding.tags}
                  createdAt={proceeding.createdAt}
                />
              </Link>
            </div>
          ))}
          <CreationItem path={`/projects/${projectId}/proceedings/writes`} />
        </div>
      </div>
      <PageNationButton dataLength={proceedingItems.length} />
      {renderChatInterface()}
      {renderChatButton()}
      {settingProjectButton()}
      {settingProjectModal()}
    </>
  );
}
