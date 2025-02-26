import { useTabStore, useTodoListActions } from "@/store/todoListStore";
import { TabClassesStyles } from "@/utils/styles/globalStyeld";

export function useTabbedFormInput() {
  const { activeTab } = useTabStore();
  const { setTab } = useTodoListActions();

  function handleTabChange(targetTab: "title" | "tag" | "priority") {
    return () => {
      setTab(targetTab);
    };
  }

  function getTabClassName(targetTab: "title" | "tag" | "priority") {
    const isActive = activeTab === targetTab;
    return `py-3 transition-all duration-200 ${
      isActive
        ? TabClassesStyles.currentTabText && TabClassesStyles.currentTabBorder
        : TabClassesStyles.inactiveTab
    }`;
  }

  return {
    activeTab,
    getTabClassName,
    handleTabChange,
  };
}
