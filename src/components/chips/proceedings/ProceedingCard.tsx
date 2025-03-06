import ParticipantIcons from "../projects/ParticipantIcons";
import { formatDate } from "@/utils/common/dateFormat";
import Folder from "@/components/ui/folder/Folder";
import { ProceedingCardStyles } from "@/utils/styles/global";

interface ProceedingCardProps {
  participantCount: number;
  attendeeNames: string[];
  name: string;
  tag: string;
  createdAt: string;
}

export default function ProceedingCard({
  participantCount,
  attendeeNames,
  name,
  createdAt,
  tag,
}: ProceedingCardProps) {
  return (
    <div className={ProceedingCardStyles.container}>
      <div className={ProceedingCardStyles.card}>
        <span className={ProceedingCardStyles.tag}>{tag}</span>
        <Folder />
        <div className={ProceedingCardStyles.content}>
          <div className={ProceedingCardStyles.titleContainer}>
            <h2 className={ProceedingCardStyles.title}>{name}</h2>
          </div>
          <p className={ProceedingCardStyles.date}>{formatDate(createdAt)}</p>
        </div>

        <div>
          <div className={ProceedingCardStyles.footer}>
            <ParticipantIcons
              count={participantCount}
              attendeeNames={attendeeNames}
            />
            <span className={ProceedingCardStyles.participantCount}>
              {participantCount}명 참가
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
