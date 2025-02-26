import { useSidebarFormSubmission } from "@/hooks/ui/sidebar/useSidebarFormSubmission";
import { useSidebarFormState } from "@/hooks/ui/sidebar/useSidebarFormState";
import { useSidebarInvites } from "@/hooks/ui/sidebar/useSidebarInvites";

export function useSidebarForm({ onClose }: Sidebar.SidebarProps) {
  const { state, handler, action } = useSidebarFormState();
  const { sidebarFormData } = state;
  const { handleFormChange, handleTagSelect } = handler;
  const { resetForm, setForm } = action;

  const inviteProps = {
    sidebarFormData,
    setForm,
  };

  const {
    state: inviteState,
    emailHandlers,
    inviteHandlers,
  } = useSidebarInvites(inviteProps);
  const { inviteEmail, handleRemoveMember } = inviteState;
  const { setInviteEmail, handleEmailChange } = emailHandlers;
  const { handleInvite, handleInviteMembers } = inviteHandlers;

  const submissionProps = {
    sidebarFormData,
    resetForm,
    setInviteEmail,
    onClose,
  };

  const { handleSubmit } = useSidebarFormSubmission(submissionProps);

  return {
    formState: {
      inviteEmail,
      sidebarFormData,
    },
    formActions: {
      setInviteEmail,
    },
    inviteHandlers: {
      handleInviteMembers,
      handleEmailChange,
      handleInvite,
      handleRemoveMember,
    },
    handlers: {
      handleFormChange,
      handleTagSelect,
      handleSubmit,
    },
  };
}
