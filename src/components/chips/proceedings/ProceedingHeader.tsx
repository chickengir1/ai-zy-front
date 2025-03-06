import ParticipantInProceeding from "./ParticipantInProceeding";
import { formatDate } from "@/utils/common/dateFormat";
import { ProceedingHeaderStyles } from "@/utils/styles/global";
import { HiOutlineCalendar, HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

export interface MeetingHeaderProps {
  title: string;
  date: string;
  participantCount: number;
  participantNames: string[];
  onClickSetting?: () => void;
}

export default function ProceedingHeader({
  title,
  date,
  participantCount,
  participantNames,
  onClickSetting,
}: MeetingHeaderProps) {
  return (
    <div className={ProceedingHeaderStyles.container}>
      <div className={ProceedingHeaderStyles.headerWrapper}>
        <div className="space-y-1.5">
          <h1 className={ProceedingHeaderStyles.title}>{title}</h1>
          <div className={ProceedingHeaderStyles.dateContainer}>
            <HiOutlineCalendar className={ProceedingHeaderStyles.dateIcon} />
            <span className={ProceedingHeaderStyles.dateText}>
              {formatDate(date)}
            </span>
          </div>
        </div>
        <button
          onClick={onClickSetting}
          className={ProceedingHeaderStyles.settingButton}
        >
          <HiOutlineCog6Tooth className="h-8 w-8" />
        </button>
      </div>
      <div className={ProceedingHeaderStyles.participantSection}>
        <h2 className={ProceedingHeaderStyles.participantTitle}>
          <HiOutlineUserGroup className="h-5 w-5 text-gray-500" />
          참석자
        </h2>
        <div className="w-full">
          <ParticipantInProceeding
            count={participantCount}
            participantNames={participantNames}
          />
        </div>
      </div>
    </div>
  );
}
