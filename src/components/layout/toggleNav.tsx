import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getActiveTab, tabs } from "@/utils/helpers/routeConfig";

// NOTE : 해당 컴포넌트는 책임이 크지 않아서 따로 함수를 분리하지 않을 예정
export default function ToggleNav() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  function handleTabClick(tabId: string) {
    const basePath = `/projects/${id}`;
    navigate(tabId === "proceedings" ? basePath : `${basePath}/${tabId}`);
  }

  function isActiveTab(tabId: string) {
    const activeTab = getActiveTab(tabs, location);
    return activeTab === tabId || (tabId === "proceedings" && !activeTab);
  }

  function getTabClassName(tabId: string) {
    const baseClasses =
      "rounded-md px-6 py-2 text-sm font-medium transition-colors";
    return isActiveTab(tabId)
      ? `${baseClasses} bg-white text-[#343434] shadow-sm`
      : `${baseClasses} text-gray-600 hover:text-gray-900`;
  }

  return (
    <div className="max-w-md">
      <div className="inline-flex rounded-md bg-[#F1F5F9] p-1 shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={getTabClassName(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
