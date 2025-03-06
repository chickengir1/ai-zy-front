import { MAX_PARTICIPANT_ICONS } from "@/utils/common/constans";
import { generateUserColor } from "@/utils/styles/attendees";
import { twMerge } from "tailwind-merge";

interface ParticipantIconsProps {
  count: number;
  participantNames: string[];
}

export default function ParticipantInProceeding({
  count,
  participantNames,
}: ParticipantIconsProps) {
  const visibleParticipants = participantNames.slice(0, MAX_PARTICIPANT_ICONS);
  const remainingParticipants = Math.max(count - MAX_PARTICIPANT_ICONS, 0);

  return (
    <div className="flex w-full flex-wrap items-center gap-2">
      {visibleParticipants.map((name, index) => (
        <div
          key={index}
          className={twMerge(
            "flex w-fit items-center gap-2 rounded-full px-3 py-1",
            generateUserColor(name)
          )}
        >
          <span className="text-sm font-medium text-white">{name}</span>
        </div>
      ))}
      {remainingParticipants > 0 && (
        <div className="flex items-center rounded-full bg-gray-100 px-3 py-1">
          <span className="text-sm font-medium text-gray-600">
            +{remainingParticipants}
          </span>
        </div>
      )}
    </div>
  );
}
