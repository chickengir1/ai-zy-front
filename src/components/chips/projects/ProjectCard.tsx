import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import ParticipantIcons from "./ParticipantIcons";
import { BaseClasses, SharedCardStyles } from "@/utils/styles/globalStyeld";

interface ProjectCardProps {
  participantCount: number;
  name: string;
  description: string;
  tag: string;
  gradientFrom?: string;
  gradientTo?: string;
  linkTo: string;
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
          BaseClasses.container,
          gradientFrom,
          gradientTo
        )}
      >
        <span className={twMerge(SharedCardStyles.tag)}>{tag}</span>
        <div className="flex flex-col gap-2 rounded-b-2xl border bg-[#f9f9f9] p-4">
          <h2 className={twMerge(SharedCardStyles.title)}>{name}</h2>
          <p className={twMerge(SharedCardStyles.description, "-mt-2")}>
            {description}
          </p>
          <footer className={twMerge(SharedCardStyles.footer)}>
            <ParticipantIcons count={participantCount} />
            <span className={twMerge(SharedCardStyles.participantText)}>
              {participantCount}명의 참가자
            </span>
          </footer>
        </div>
      </div>
    </Link>
  );
}
