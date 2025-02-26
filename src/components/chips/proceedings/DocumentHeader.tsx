import { FiCheckSquare } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import ParticipantInDocs from "./ParticipantInDocs";
import { DocumentHeaderStyles } from "@/utils/styles/globalStyeld";

export interface MeetingHeaderProps {
  title: string;
  date: string;
  participantCount: number;
  participantNames: string[];
  onClickSetting?: () => void;
}

export default function DocumentHeader({
  title,
  date,
  participantCount,
  participantNames,
  onClickSetting,
}: MeetingHeaderProps) {
  return (
    <div className={DocumentHeaderStyles.container}>
      <div className={DocumentHeaderStyles.headerWrapper}>
        <div className={DocumentHeaderStyles.titleSection}>
          <h1 className={DocumentHeaderStyles.title}>{title}</h1>
          <div className={DocumentHeaderStyles.dateContainer}>
            <FiCheckSquare className={DocumentHeaderStyles.dateIcon} />
            <span className={DocumentHeaderStyles.dateText}>{date}</span>
          </div>
        </div>
        <button onClick={onClickSetting}>
          <CiSettings className={DocumentHeaderStyles.settingButton} />
        </button>
      </div>
      <div className={DocumentHeaderStyles.participantSection}>
        <h2 className={DocumentHeaderStyles.participantTitle}>
          <GoPeople className={DocumentHeaderStyles.participantIcon} />
          참석자
        </h2>
        <div className={DocumentHeaderStyles.participantListContainer}>
          <ParticipantInDocs
            count={participantCount}
            participantNames={participantNames}
          />
        </div>
      </div>
    </div>
  );
}
