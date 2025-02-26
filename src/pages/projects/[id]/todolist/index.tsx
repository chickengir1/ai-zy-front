import { twMerge } from "tailwind-merge";
import { RiSettings5Fill } from "react-icons/ri";
import {
  MainLayoutClassesStyles,
  UnitClassesStyles,
  ToolClassesStyles,
} from "@/utils/styles/globalStyeld";
import Header from "@/components/layout/header/Header";
import ToggleNav from "@/components/layout/toggle/toggleNav";
import SearchInput from "@/components/ui/search/SearchInput";
import TodoList from "@/components/schedule/todolist/Todolist";
import ErrorFallback from "@/components/errorBoundary/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import LoadingPulse from "@/components/ui/loading/Pulse";
import { Suspense } from "react";
import { useChatInterfaceController } from "@/hooks/ui/chatInterface/useChatInterfaceController";
import { useToggle } from "@/hooks/utility/useToggle";
import SettingModal from "@/components/portal/modal/SettingModal";

export default function TodolistPage() {
  const { renderChatInterface, renderChatButton } =
    useChatInterfaceController();

  const [isOpen, toggle] = useToggle(false);

  function handleSettingOpen() {
    toggle();
  }

  return (
    <div>
      <div className={twMerge(UnitClassesStyles.header)}>
        <Header title="투두리스트 페이지" />
      </div>

      <div
        className={twMerge(
          MainLayoutClassesStyles.headerNavPadding,
          "justify-between"
        )}
      >
        <ToggleNav tabIndex={1} />
        <SearchInput
          placeholder="투두리스트를 검색해보세요"
          onClick={() => {
            alert("검색");
          }}
          onChange={() => {}}
        />
      </div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingPulse />}>
          <div className={twMerge(MainLayoutClassesStyles.padding)}>
            <TodoList />
          </div>
        </Suspense>
      </ErrorBoundary>
      {renderChatInterface()}
      {renderChatButton()}
      <button
        onClick={handleSettingOpen}
        className={twMerge(ToolClassesStyles.base, ToolClassesStyles.setting)}
      >
        <RiSettings5Fill className={ToolClassesStyles.icon} />
      </button>
      <SettingModal isOpen={isOpen} onClose={handleSettingOpen}>
        <div>123</div>
      </SettingModal>
    </div>
  );
}
