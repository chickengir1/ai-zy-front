import { FiCheckSquare } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import ParticipantInDocs from "./ParticipantInDocs";

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
    <div className="mb-4 rounded-t-lg border border-gray-200 bg-gray-50 p-4 shadow-md">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 md:text-base">
            <FiCheckSquare className="h-4 w-4 md:h-5 md:w-5" />
            <span className="-mt-[0.5px]">{date}</span>
          </div>
        </div>
        <button onClick={onClickSetting}>
          <CiSettings className="h-7 w-7 text-gray-500 transition-all hover:text-gray-700 md:h-8 md:w-8" />
        </button>
      </div>
      <div className="mt-4 border-t border-gray-200 pt-4">
        <h2 className="flex items-center gap-2 text-sm font-semibold">
          <GoPeople className="h-5 w-5 md:h-6 md:w-6" />
          참석자
        </h2>
        <div className="mt-2 max-w-[325px]">
          <ParticipantInDocs
            count={participantCount}
            participantNames={participantNames}
          />
        </div>
      </div>
    </div>
  );
}
