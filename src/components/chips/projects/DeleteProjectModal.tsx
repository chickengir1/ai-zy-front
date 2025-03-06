import { useDeleteProject } from "@/hooks/api/projects/useProjects";
import DeleteModal from "@/components/portal/manageModals/DeleteModal";

interface DeleteProjectModalProps {
  onClose: () => void;
  projectId: string;
}

export default function DeleteProjectModal({
  onClose,
  projectId,
}: DeleteProjectModalProps) {
  const deleteProjectMutation = useDeleteProject(projectId);
  const deleteFunction = () => deleteProjectMutation.mutateAsync();

  const path = `/projects/${projectId}`;
  const redirectPath = "/project";

  const title = "프로젝트 삭제";
  const description =
    "이 프로젝트를 삭제하시겠습니까?\n이 작업은 되돌릴 수 없으며 모든 내용이 영구적으로 삭제됩니다.";

  return (
    <DeleteModal
      onClose={onClose}
      title={title}
      description={description}
      path={path}
      redirectPath={redirectPath}
      deleteFunction={deleteFunction}
    />
  );
}
