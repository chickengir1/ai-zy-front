import { FaRegCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import ParticipantIcons from "../projects/ParticipantIcons";
import { twMerge } from "tailwind-merge";
import {
  baseClasses,
  sharedCardStyles,
  sizeClasses,
} from "@/utils/styles/globalStyeld";
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
          sizeClasses.container,
          "flex flex-col bg-white p-4"
        )}
      >
        <header className="flex justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center rounded-full border bg-blue-100 p-3">
              <FaRegCalendarCheck className="text-blue-500" size={20} />
            </span>
            <div className="max-w-[125px] flex-1">
              <h2 className={sharedCardStyles.title}>{name}</h2>
              <p className={sharedCardStyles.description}>{createdAt}</p>
            </div>
          </div>
          <span className={sharedCardStyles.tag}>{tag}</span>
        </header>
        <blockquote className="my-4 max-w-[325px] flex-1 rounded-r border-l-4 border-gray-300 bg-gray-200 p-2 text-sm">
          <p className="line-clamp-[4] tracking-widest md:line-clamp-[7]">
            {description}
          </p>
        </blockquote>
        <footer className={sharedCardStyles.footer}>
          <ParticipantIcons count={participantCount} />
          <span className={sharedCardStyles.participantText}>
            {participantCount}명의 참가자
          </span>
        </footer>
      </div>
    </Link>
  );
}
