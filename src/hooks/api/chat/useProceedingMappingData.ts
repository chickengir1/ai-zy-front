import { useProceedingMapStore } from "@/store/documentMapStore";
import { useProceedings } from "@/hooks/api/proceedings/useProceedings";
import { useEffect } from "react";

export function useProceedingMappingData(projectId: string) {
  const { setProceedingMap } = useProceedingMapStore();

  const { data: proceedings } = useProceedings(projectId, {
    page: "0",
    limit: "100",
  });

  useEffect(() => {
    if (proceedings) {
      const proceedingMap = proceedings.content.map((proceeding) => {
        return {
          id: proceeding.proceedingsId,
          name: proceeding.title,
        };
      });

      console.log(proceedingMap);
      setProceedingMap(proceedingMap);
    }
  }, [proceedings, setProceedingMap]);

  return {
    proceedingMap: useProceedingMapStore((state) => state.proceedingMap),
  };
}
