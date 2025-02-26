import { useProceedingDetailStore } from "@/store/documentStore";
import { useEffect } from "react";
import { useNavigation } from "@/hooks/utility/useNavigation";
import { useProceedingsDetail } from "@/hooks/api/proceedings/useProceedings";
import { documentParams } from "@/utils/helpers/sharedHelpers";

export function useDocumentData() {
  const { projectId, documentId } = documentParams();
  const { goTo } = useNavigation();

  const { data } = useProceedingsDetail(projectId, documentId);

  const { actions } = useProceedingDetailStore();
  const { setProceedingDetail } = actions;

  useEffect(() => {
    if (data) {
      setProceedingDetail(data);
    }
  }, [data, setProceedingDetail]);

  function handleSettingOpen() {
    goTo(`/projects/${projectId}/proceedings/writes?docId=${documentId}`);
  }

  return {
    documentData: data,
    handler: {
      handleSettingOpen,
    },
  };
}
