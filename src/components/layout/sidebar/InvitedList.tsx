import { FiUsers, FiX } from "react-icons/fi";
import { useSidebarForm } from "@/hooks/business/sidebar/useSidebarForm";

export default function InvitedList({ onClose }: Sidebar.SidebarProps) {
  const { formState, inviteHandlers } = useSidebarForm({
    onClose,
  });
  const { sidebarFormData } = formState;
  const { handleRemoveMember } = inviteHandlers;

  if (sidebarFormData.invitedTeamMembers.length === 0) return null;

  function handleRemoveInvitedMember(member: string) {
    return () => handleRemoveMember(member);
  }

  return (
    <ul className="flex max-h-[130px] flex-col gap-2 overflow-y-auto md:grid md:grid-cols-2">
      {sidebarFormData.invitedTeamMembers.map((member: string) => (
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
            onClick={handleRemoveInvitedMember(member)}
          >
            <FiX className="h-5 w-5" />
          </button>
        </li>
      ))}
    </ul>
  );
}
