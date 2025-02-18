import {
  tabs,
  isValidTabIndex,
  getChangeTab,
} from "@/utils/helpers/routeConfig";
import { useParams } from "react-router-dom";
import { useNavigation } from "@/hooks/ui/useNavigation";

interface ToggleNavProps {
  tabIndex: number;
}

export default function ToggleNav({ tabIndex }: ToggleNavProps) {
  const { id } = useParams();
  const { goTo } = useNavigation();

  if (!isValidTabIndex(tabIndex)) {
    return null;
  }

  function handleTabClick(tabId: number): () => void {
    return function (): void {
      const basePath = `/projects/${id}`;
      const path = tabId === 0 ? basePath : `${basePath}/todolist`;
      goTo(path);
    };
  }

  return (
    <div className="max-w-md">
      <div className="inline-flex rounded-md bg-[#F1F5F9] p-1 shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={handleTabClick(tab.id)}
            className={getChangeTab(tab.id, tabIndex)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
