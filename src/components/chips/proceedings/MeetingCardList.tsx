import MeetingCard from "@/components/chips/proceedings/MeetingCard";
import { useMeetingsData } from "@/hooks/api/proceedings/useMeetingsData";

interface MeetingCardListProps {
  page: string;
  limit: string;
}

export default function MeetingCardList({ page, limit }: MeetingCardListProps) {
  const { meetingItems, projectId } = useMeetingsData({ page, limit });

  return (
    <>
      {meetingItems.map((meeting) => (
        <MeetingCard
          key={meeting.proceedingsId}
          participantCount={meeting.attendeeNames.length}
          name={meeting.title}
          tag={meeting.tags}
          createdAt={meeting.createdAt}
          linkTo={`/projects/${projectId}/proceedings/${meeting.proceedingsId}`}
        />
      ))}
    </>
  );
}
