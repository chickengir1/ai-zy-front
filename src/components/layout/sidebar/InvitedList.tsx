import { FiUsers, FiX } from "react-icons/fi";

interface InvitedListProps {
  invitedTeamMembers: string[];
  onRemoveMember: (email: string) => void;
}

export default function InvitedList({
  invitedTeamMembers,
  onRemoveMember,
}: InvitedListProps) {
  if (invitedTeamMembers.length === 0) return null;

  return (
    <ul className="flex max-h-[130px] flex-col gap-2 overflow-y-auto md:grid md:grid-cols-2">
      {invitedTeamMembers.map((member) => (
        <li
          key={member}
          className="flex items-center justify-between rounded-md border bg-white p-2"
        >
          <div className="flex items-center truncate">
            <FiUsers className="mr-2 h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-700">{member}</span>
          </div>
          <button
            type="button"
            className="text-red-500 hover:text-red-600"
            onClick={() => onRemoveMember(member)}
          >
            <FiX className="h-5 w-5" />
          </button>
        </li>
      ))}
    </ul>
  );
}
