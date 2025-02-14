import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { baseClasses, sizeClasses } from "@/utils/Styles/globalStyeld";
import ParticipantIcons from "./ParticipantIcons";

interface ProjectCardProps {
  participantCount: number;
  name: string;
  description: string;
  tag: string;
  gradientFrom?: string;
  gradientTo?: string;
  linkTo?: string;
}

export default function ProjectCard({
  participantCount,
  name,
  description,
  tag,
  gradientFrom,
  gradientTo,
  linkTo = "/",
}: ProjectCardProps) {
  return (
    <Link to={linkTo}>
      <div
        className={twMerge(
          "flex flex-col justify-end bg-gradient-to-b",
          baseClasses.container,
          sizeClasses.container,
          gradientFrom,
          gradientTo
        )}
      >
        <span className="m-2 w-fit rounded bg-black px-2 py-1 text-sm text-white">
          {tag}
        </span>
        <div className="flex flex-col gap-1 rounded-b-2xl border bg-[#f9f9f9] p-4">
          <h2 className="truncate text-lg font-bold text-gray-700">{name}</h2>
          <p className="truncate text-sm text-gray-500">{description}</p>
          <div className="flex items-center justify-between">
            <ParticipantIcons count={participantCount} />
            <span className="text-sm text-gray-800">
              {participantCount}명의 참가자
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
