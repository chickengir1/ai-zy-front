import {
  tabs,
  isValidTabIndex,
  getChangeTab,
} from "@/utils/helpers/routeConfig";
import { useNavigate, useParams } from "react-router-dom";

interface ToggleNavProps {
  tabIndex: number;
}

export default function ToggleNav({ tabIndex }: ToggleNavProps) {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!isValidTabIndex(tabIndex)) {
    return null;
  }

  function handleTabClick(tabId: number) {
    const basePath = `/projects/${id}`;
    const path = tabId === 0 ? basePath : `${basePath}/todolist`;
    navigate(path);
  }

  return (
    <div className="max-w-md">
      <div className="inline-flex rounded-md bg-[#F1F5F9] p-1 shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={getChangeTab(tab.id, tabIndex)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
