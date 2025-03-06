import { useToast } from "@/providers/toast/ToastProvider";
import {
  useSidebarActions,
  useSidebarInviteMembersStore,
} from "@/store/sidebarStore";
import { validateEmail } from "@/utils/validation/sidebarValidation";

interface InviteProps {
  sidebarFormData: Sidebar.SidebarFormProps;
  setForm: (form: Sidebar.SidebarFormProps) => void;
}

export function useSidebarInvites(props: InviteProps) {
  const { sidebarFormData, setForm } = props;
  const { inviteEmail } = useSidebarInviteMembersStore();
  const { setInviteEmail } = useSidebarActions();
  const { showError } = useToast();

  function handleEmailChange(e: Event.InputEventType) {
    const { value } = e.target;
    setInviteEmail(value.trim());
  }

  function handleInviteMembers(members: string[]) {
    setForm({ ...sidebarFormData, invitedTeamMembers: members });
  }

  function handleInvite() {
    const isValid = validateEmail(
      inviteEmail,
      sidebarFormData.invitedTeamMembers,
      showError
    );

    if (!isValid) return;

    handleInviteMembers([
      ...sidebarFormData.invitedTeamMembers,
      inviteEmail.trim(),
    ]);
    setInviteEmail("");
  }

  function handleRemoveMember(email: string) {
    handleInviteMembers(
      sidebarFormData.invitedTeamMembers.filter(
        (member: string) => member !== email
      )
    );
  }

  return {
    state: {
      inviteEmail,
      handleRemoveMember,
    },
    emailHandlers: {
      setInviteEmail,
      handleEmailChange,
    },
    inviteHandlers: {
      handleInvite,
      handleInviteMembers,
    },
  };
}
