import { useEffect } from "react";
import { useProceedingsDetail } from "@/hooks/api/proceedings/useProceedings";
import { useNavigation } from "@/hooks/utility/navigation/useNavigation";
import { useProceedingDetailStore } from "@/store/proceedings/proceedingStore";
import { useProceedingParams } from "@/hooks/utility/common/useParams";

export function useProceedingData() {
  const { projectId, proceedingId } = useProceedingParams();
  const { goTo } = useNavigation();

  const { data } = useProceedingsDetail(projectId, proceedingId);

  const { actions } = useProceedingDetailStore();
  const { setProceedingDetail } = actions;

  useEffect(() => {
    if (data) {
      setProceedingDetail(data);
    }
  }, [data, setProceedingDetail]);

  function handleSettingOpen() {
    goTo(
      `/projects/${projectId}/proceedings/writes?proceedingId=${proceedingId}`
    );
  }

  return {
    proceedingData: data,
    handler: {
      handleSettingOpen,
    },
  };
}
