import { FaRegCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import ParticipantIcons from "../projects/ParticipantIcons";
import { twMerge } from "tailwind-merge";
import {
  BaseClassesStyles,
  MeetingCardStyles,
  SharedCardClassesStyles,
} from "@/utils/styles/globalStyeld";

interface MeetingCardProps {
  participantCount: number;
  name: string;
  tag: string;
  createdAt: string;
  linkTo: string;
}

export default function MeetingCard({
  participantCount,
  name,
  createdAt,
  linkTo,
  tag,
}: MeetingCardProps) {
  return (
    <Link to={linkTo}>
      <div
        className={twMerge(
          BaseClassesStyles.container,
          MeetingCardStyles.container
        )}
      >
        <header className={MeetingCardStyles.header}>
          <div className={MeetingCardStyles.headerWrapper}>
            <span className={MeetingCardStyles.iconContainer}>
              <FaRegCalendarCheck
                className={MeetingCardStyles.icon}
                size={20}
              />
            </span>
            <div className={MeetingCardStyles.titleContainer}>
              <h2 className={twMerge(SharedCardClassesStyles.title)}>{name}</h2>
              <p className={twMerge(SharedCardClassesStyles.description)}>
                {createdAt}
              </p>
            </div>
          </div>
          <span
            className={twMerge(
              SharedCardClassesStyles.tag,
              MeetingCardStyles.tagLabel
            )}
          >
            {tag}
          </span>
        </header>
        <blockquote className={MeetingCardStyles.contentBox}>
          <p className={MeetingCardStyles.contentText}>{name}</p>
        </blockquote>
        <footer className={twMerge(SharedCardClassesStyles.footer)}>
          <ParticipantIcons count={participantCount} />
          <span className={SharedCardClassesStyles.participantText}>
            {participantCount}명의 참가자
          </span>
        </footer>
      </div>
    </Link>
  );
}
