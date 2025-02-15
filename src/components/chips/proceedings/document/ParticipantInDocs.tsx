import { BsPersonCircle } from "react-icons/bs";

interface ParticipantIconsProps {
  count: number;
  participantNames: string[];
}

export default function ParticipantInDocs({
  count,
  participantNames,
}: ParticipantIconsProps) {
  const MAX_PARTICIPANT_ICONS = 3;

  const participants = Math.min(count, MAX_PARTICIPANT_ICONS);
  const remainingParticipants = Math.max(count - MAX_PARTICIPANT_ICONS, 0);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: participants }, (_, index) => (
        <div
          key={index}
          className="flex items-center gap-1 rounded-full bg-gray-200 p-1"
        >
          <BsPersonCircle size={20} className="text-gray-500" />
          <span className="pr-1 text-xs text-gray-500 md:text-sm">
            {participantNames[index] || ""}
          </span>
        </div>
      ))}
      {remainingParticipants > 0 && (
        <span className="text-sm text-gray-500">+{remainingParticipants}</span>
      )}
    </div>
  );
}
