import { useParams } from "react-router-dom";
import { useNavigation } from "@/hooks/utility/useNavigation";

export function useTabNavigation() {
  const { id } = useParams();
  const { goTo } = useNavigation();

  function handleToggleNav(tabId: number) {
    return () => {
      const basePath = `/projects/${id}`;
      const path = tabId === 0 ? basePath : `${basePath}/todolist`;
      goTo(path);
    };
  }

  return { handleToggleNav };
}
