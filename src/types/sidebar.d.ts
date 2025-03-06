declare namespace Sidebar {
  export interface SidebarFormProps {
    title: string;
    description: string;
    tag: string;
    invitedTeamMembers: string[];
  }

  export interface SidebarProps {
    onClose: () => void;
  }

  export interface SidebarFormState {
    form: Sidebar.SidebarFormProps;
    actions: {
      setForm: (form: Sidebar.SidebarFormProps) => void;
      resetForm: () => void;
    };
  }
}

declare namespace Invite {
  export interface InviteEmailState {
    inviteEmail: string;
    actions: {
      setInviteEmail: (inviteEmail: string) => void;
    };
  }

  export interface InviteMemberState {
    inviteEmail: string;
    actions: {
      handleInviteMembers: (members: string[]) => void;
      handleRemoveMember: (email: string) => void;
    };
  }
}

declare namespace Validation {
  export interface FieldStyles {
    button: string;
    input?: string;
  }

  export interface Options {
    validator: (value: string) => boolean;
    errorMessage: string;
    validStyles: FieldStyles;
    invalidStyles: FieldStyles;
  }

  export interface Field {
    isValid: boolean;
    hasInput: boolean;
    showError: boolean;
    errorMessage: string;
    styles: FieldStyles;
  }
}
