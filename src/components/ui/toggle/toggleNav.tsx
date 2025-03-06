import { useTabNavigation } from "@/hooks/utility/navigation/useTabNavigation";
import {
  tabs,
  isValidTabIndex,
  getChangeTab,
} from "@/utils/common/routeConfig";

interface ToggleNavProps {
  tabIndex: number;
}

export default function ToggleNav({ tabIndex }: ToggleNavProps) {
  const { handleToggleNav } = useTabNavigation();

  if (!isValidTabIndex(tabIndex)) {
    return null;
  }

  return (
    <div className="flex w-fit justify-center rounded-md bg-[#F1F5F9] p-1 shadow-md">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={handleToggleNav(tab.id)}
          className={getChangeTab(tab.id, tabIndex)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
