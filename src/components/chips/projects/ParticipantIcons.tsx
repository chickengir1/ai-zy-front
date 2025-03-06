import { twMerge } from "tailwind-merge";
import { MAX_PARTICIPANT_ICONS } from "@/utils/common/constans";
import { generateUserColor, getInitials } from "@/utils/styles/attendees";

interface ParticipantIconsProps {
  count: number;
  attendeeNames: string[];
  className?: string;
  iconStyle?: string;
}

export default function ParticipantIcons({
  count,
  attendeeNames,
  className,
  iconStyle,
}: ParticipantIconsProps) {
  const visibleParticipants = attendeeNames.slice(0, MAX_PARTICIPANT_ICONS);
  const extraCount = Math.max(count - MAX_PARTICIPANT_ICONS, 0);

  function attendeed(name: string, index: number) {
    const initials = getInitials(name);
    return (
      <div
        key={index}
        className={twMerge(
          "h-8 w-8 rounded-full ring-2 ring-white",
          "flex items-center justify-center",
          generateUserColor(name),
          iconStyle
        )}
        title={name}
      >
        <span className="text-xs font-medium text-white">
          {initials || index + 1}
        </span>
      </div>
    );
  }

  return (
    <div className={twMerge("flex items-center -space-x-2", className)}>
      {visibleParticipants.map((name, index) => attendeed(name, index))}
      {extraCount > 0 && (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white">
          <span className="text-xs font-medium text-gray-600">
            +{extraCount}
          </span>
        </div>
      )}
    </div>
  );
}
