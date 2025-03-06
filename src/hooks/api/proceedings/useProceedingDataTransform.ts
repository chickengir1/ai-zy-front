import { useProceedings } from "@/hooks/api/proceedings/useProceedings";
import { useParamsId } from "@/hooks/utility/common/useParams";
import { usePageStore } from "@/store/utilityStore/pageStore";

export function useProceedingDataTransform() {
  const { page } = usePageStore();
  const projectId = useParamsId();

  const { data: proceeding } = useProceedings(projectId, {
    page: String(page),
  });
  const proceedingItems = proceeding?.content || [];

  return { proceedingItems, projectId };
}
