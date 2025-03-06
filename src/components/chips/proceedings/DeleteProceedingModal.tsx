import { useDeleteProceeding } from "@/hooks/api/proceedings/useProceedings";
import DeleteModal from "@/components/portal/manageModals/DeleteModal";

interface DeleteProceedingModalProps {
  onClose: () => void;
  projectId: string;
  proceedingId: string;
}

export default function DeleteProceedingModal({
  onClose,
  projectId,
  proceedingId,
}: DeleteProceedingModalProps) {
  const deleteProceedingMutation = useDeleteProceeding(projectId, proceedingId);
  const deleteFunction = () => deleteProceedingMutation.mutateAsync();

  const path = `/projects/${projectId}/proceedings/${proceedingId}`;
  const redirectPath = `/projects/${projectId}`;

  const title = "회의록 삭제";
  const description =
    "이 회의록을 삭제하시겠습니까?\n이 작업은 되돌릴 수 없으며 모든 내용이 영구적으로 삭제됩니다.";

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
