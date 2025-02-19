import { BsPersonCircle } from "react-icons/bs";

interface ParticipantIconsProps {
  count: number;
}

export default function ParticipantIcons({ count }: ParticipantIconsProps) {
  const MAX_PARTICIPANT_ICONS = 3;

  const participants = Math.min(count, MAX_PARTICIPANT_ICONS);
  const remainingParticipants = Math.max(count - MAX_PARTICIPANT_ICONS, 0);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: participants }, (_, index) => (
        <BsPersonCircle key={index} size={20} className="text-gray-500" />
      ))}
      {remainingParticipants > 0 && (
        <span className="text-sm text-gray-500">+{remainingParticipants}</span>
      )}
    </div>
  );
}
