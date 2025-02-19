import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import ParticipantIcons from "./ParticipantIcons";
import {
  BaseClassesStyles,
  SharedCardClassesStyles,
} from "@/utils/styles/globalStyeld";

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
          BaseClassesStyles.container,
          gradientFrom,
          gradientTo
        )}
      >
        <span className={twMerge(SharedCardClassesStyles.tag)}>{tag}</span>
        <div className="flex flex-col gap-2 rounded-b-2xl border bg-[#f9f9f9] p-4">
          <h2 className={twMerge(SharedCardClassesStyles.title)}>{name}</h2>
          <p className={twMerge(SharedCardClassesStyles.description, "-mt-2")}>
            {description}
          </p>
          <footer className={twMerge(SharedCardClassesStyles.footer)}>
            <ParticipantIcons count={participantCount} />
            <span className={twMerge(SharedCardClassesStyles.participantText)}>
              {participantCount}명의 참가자
            </span>
          </footer>
        </div>
      </div>
    </Link>
  );
}
