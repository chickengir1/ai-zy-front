import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getActiveTab, tabs } from "@/utils/helpers/routeConfig";

export default function ToggleNav() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="max-w-md">
      <div className="inline-flex rounded-md bg-[#F1F5F9] p-1 shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => navigate(`/projects/${id}/${tab.id}`)}
            className={`rounded-md px-6 py-2 text-sm font-medium transition-colors ${
              getActiveTab(tabs, location) === tab.id
                ? "bg-white text-[#343434] shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
