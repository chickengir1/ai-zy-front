import { useTodoTabStore, useTodoListActions } from "@/store/todoListStore";
import { TabStyles } from "@/utils/styles/global";

const tabStyles = {
  isActive: TabStyles.currentTabText,
  border: TabStyles.currentTabBorder,
  inactive: TabStyles.inactiveTab,
};

export function useTodoTabNavigation() {
  const { activeTab } = useTodoTabStore();
  const { setTab } = useTodoListActions();

  function handleTabChange(targetTab: Todo.TodoTab) {
    return () => setTab(targetTab);
  }

  function getTabClassName(targetTab: Todo.TodoTab) {
    const isActive = activeTab === targetTab;

    return `py-3 transition-all duration-200 ${
      isActive ? tabStyles.isActive && tabStyles.border : tabStyles.inactive
    }`;
  }

  return {
    activeTab,
    getTabClassName,
    handleTabChange,
  };
}
