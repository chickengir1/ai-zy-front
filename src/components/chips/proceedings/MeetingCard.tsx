import { FaRegCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import ParticipantIcons from "../projects/ParticipantIcons";
import { twMerge } from "tailwind-merge";
import { baseClasses, sharedCardStyles } from "@/utils/styles/globalStyeld";
interface MeetingCardProps {
  participantCount: number;
  name: string;
  description: string;
  tag: string;
  createdAt: string;
  linkTo?: string;
}

export default function MeetingCard({
  participantCount,
  name,
  description,
  createdAt,
  linkTo = "/projects/1/proceedings/1",
  tag,
}: MeetingCardProps) {
  return (
    <Link to={linkTo}>
      <div
        className={twMerge(
          baseClasses.container,
          "relative flex flex-col gap-4 bg-white p-4"
        )}
      >
        <header className="flex items-start justify-between">
          <div className="flex flex-1 items-center gap-4">
            <span className="flex shrink-0 items-center justify-center rounded-full border bg-blue-100 p-3">
              <FaRegCalendarCheck className="text-blue-500" size={20} />
            </span>
            <div className="max-w-[130px]">
              <h2 className={twMerge(sharedCardStyles.title)}>{name}</h2>
              <p className={twMerge(sharedCardStyles.description)}>
                {createdAt}
              </p>
            </div>
          </div>
          <span
            className={twMerge(sharedCardStyles.tag, "absolute right-0 top-0")}
          >
            {tag}
          </span>
        </header>
        <blockquote className="h-[100px] overflow-y-auto rounded-r border-l-4 border-gray-300 bg-gray-200 p-2 text-sm md:h-[160px]">
          <p className="whitespace-pre-line break-words">{description}</p>
        </blockquote>
        <footer className={twMerge(sharedCardStyles.footer)}>
          <ParticipantIcons count={participantCount} />
          <span className={sharedCardStyles.participantText}>
            {participantCount}명의 참가자
          </span>
        </footer>
      </div>
    </Link>
  );
}
