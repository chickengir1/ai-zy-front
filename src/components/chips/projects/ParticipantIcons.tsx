import { BsPersonCircle } from "react-icons/bs";

export default function ParticipantIcons({ count }: { count: number }) {
  const MAX_PARTICIPANT_ICONS = 3;
  const remainingParticipants = count - MAX_PARTICIPANT_ICONS;

  function participants() {
    return Array.from({
      length: Math.min(count, MAX_PARTICIPANT_ICONS),
    });
  }

  function getRemainingParticipants(): number {
    return Math.max(remainingParticipants, 0);
  }

  return (
    <div className="flex items-center gap-1">
      {participants().map((_, index) => (
        <BsPersonCircle
          key={`participant-${index}`}
          size={20}
          className="text-gray-500"
        />
      ))}
      {getRemainingParticipants() > 0 && (
        <span className="text-sm text-gray-500">
          +{getRemainingParticipants()}
        </span>
      )}
    </div>
  );
}
