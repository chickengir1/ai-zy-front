import ParticipantIcons from "./ParticipantIcons";
import { FiFolder } from "react-icons/fi";
import { ProjectCardStyles } from "@/utils/styles/global";

interface ProjectCardProps {
  participantCount: number;
  attendeeNames: string[];
  name: string;
  description: string;
  tag: string;
}

export default function ProjectCard({
  participantCount,
  attendeeNames,
  name,
  description,
  tag,
}: ProjectCardProps) {
  return (
    <div className={ProjectCardStyles.card}>
      <div className={ProjectCardStyles.gradient} />
      <div className={ProjectCardStyles.folderIcon}>
        <FiFolder className={ProjectCardStyles.folderSvg} />
      </div>
      <div className={ProjectCardStyles.content}>
        <div className={ProjectCardStyles.infoSection}>
          <span className={ProjectCardStyles.tag}>{tag}</span>
          <h2 className={ProjectCardStyles.title}>{name}</h2>
          <p className={ProjectCardStyles.description}>{description}</p>
        </div>
        <div className={ProjectCardStyles.footer}>
          <div className={ProjectCardStyles.participantInfo}>
            <ParticipantIcons
              count={participantCount}
              attendeeNames={attendeeNames}
            />
            <span className={ProjectCardStyles.participantCount}>
              {participantCount}명 참가
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
