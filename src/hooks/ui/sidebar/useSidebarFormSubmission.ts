import { useCreateProject } from "@/hooks/api/projects/useProjects";
import { useNavigation } from "@/hooks/utility/useNavigation";
import { useToast } from "@/providers/ToastProvider";
import { validateSidebarForm } from "@/utils/validation/sidebarValidation";

interface SubmissionProps {
  sidebarFormData: Sidebar.SidebarFormProps;
  resetForm: () => void;
  setInviteEmail: (email: string) => void;
  onClose: () => void;
}

export function useSidebarFormSubmission(props: SubmissionProps) {
  const { sidebarFormData, resetForm, setInviteEmail, onClose } = props;
  const { showError, showSuccess } = useToast();
  const { goTo } = useNavigation();
  const createProjectMutation = useCreateProject();

  function handleSubmitSuccess() {
    setInviteEmail("");
    resetForm();
    onClose();
    showSuccess("프로젝트가 생성되었습니다!");
    goTo(`/`);
  }

  function handleSubmitError(error: Error) {
    showError(error.message);
  }

  function handleSubmit(e: Event.FormEventType) {
    e.preventDefault();

    if (!validateSidebarForm(sidebarFormData, showError)) return;

    const newProject = {
      title: sidebarFormData.title,
      description: sidebarFormData.description,
      tag: sidebarFormData.tag,
      invitedTeamMembers: sidebarFormData.invitedTeamMembers,
    };

    createProjectMutation.mutate(newProject, {
      onSuccess: handleSubmitSuccess,
      onError: handleSubmitError,
    });
  }

  return {
    handleSubmit,
  };
}
