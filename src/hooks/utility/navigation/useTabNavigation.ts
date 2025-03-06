import { useParamsId } from "@/hooks/utility/common/useParams";
import { useNavigation } from "@/hooks/utility/navigation/useNavigation";

export function useTabNavigation() {
  const id = useParamsId();
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
