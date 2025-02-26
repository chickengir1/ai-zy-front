import { create } from "zustand";
import { tag } from "@/utils/constants";

const initialSidebarForm: Sidebar.SidebarFormProps = {
  title: "",
  description: "",
  tag: tag[0],
  invitedTeamMembers: [],
};

export const useSidebarFormStore = create<Sidebar.SidebarFormState>((set) => ({
  form: initialSidebarForm,
  actions: {
    setForm: (form) => set({ form }),
    resetForm: () => set({ form: initialSidebarForm }),
  },
}));

export const useSidebarInviteMembersStore = create<Invite.InviteEmailState>(
  (set) => ({
    inviteEmail: "",
    actions: {
      setInviteEmail: (inviteEmail) => set({ inviteEmail }),
    },
  })
);

export const useInviteMemberStore = create<Invite.InviteMemberState>((set) => ({
  inviteEmail: "",
  actions: {
    handleInviteMembers: (members) => set({ inviteEmail: members.join(", ") }),
    handleRemoveMember: (email) => set({ inviteEmail: email }),
  },
}));

export const useSidebarActions = () => {
  const { setForm, resetForm } = useSidebarFormStore().actions;
  const { setInviteEmail } = useSidebarInviteMembersStore().actions;
  const { handleInviteMembers, handleRemoveMember } =
    useInviteMemberStore().actions;

  return {
    setForm,
    resetForm,
    setInviteEmail,
    handleInviteMembers,
    handleRemoveMember,
  };
};
