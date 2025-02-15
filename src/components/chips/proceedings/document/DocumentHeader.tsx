import { FiCheckSquare } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import ParticipantInDocs from "./ParticipantInDocs";

interface MeetingHeaderProps {
  title: string;
  date: string;
  participantCount: number;
}

const mockParticipantNames = ["김철수", "이영희", "박영수", "최영미", "정영희"];
export default function DocumentHeader({
  title,
  date,
  participantCount,
}: MeetingHeaderProps) {
  return (
    <div className="space-y-6 border-b-2 border-gray-200 bg-white p-4">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 md:text-base">
            <FiCheckSquare className="h-4 w-4 md:h-5 md:w-5" />
            <span className="-mt-[0.5px]">{date}</span>
          </div>
        </div>
        <button>
          <CiSettings className="h-7 w-7 text-gray-500 transition-all hover:text-gray-700 md:h-8 md:w-8" />
        </button>
      </div>
      <div className="space-y-3">
        <h2 className="flex items-center gap-2 text-sm font-semibold">
          <GoPeople className="h-5 w-5 md:h-6 md:w-6" />
          참석자
        </h2>
        <div className="max-w-[325px]">
          <ParticipantInDocs
            count={participantCount}
            participantNames={mockParticipantNames}
          />
        </div>
      </div>
    </div>
  );
}
