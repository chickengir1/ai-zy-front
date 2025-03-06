import { ReactNode } from "react";
import { HiChatAlt } from "react-icons/hi";
import { RiSettings5Fill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";
import { useKeyPress } from "@/hooks/utility/toggle/useKeyPress";
import { useToggle } from "@/hooks/utility/toggle/useToggle";
import { ToolStyles } from "@/utils/styles/global";
import ChatInterface from "@/components/chatInterface/chatUi/ChatInterface";
import DeleteProceedingModal from "@/components/chips/proceedings/DeleteProceedingModal";
import DeleteProjectModal from "@/components/chips/projects/DeleteProjectModal";
import SettingModal from "@/components/portal/manageModals/SettingModal";
import { useProceedingParams } from "@/hooks/utility/common/useParams";
import { useParams } from "react-router-dom";

interface ChatInterfaceReturn {
  chat: {
    renderChatInterface: () => ReactNode;
    renderChatButton: () => ReactNode;
  };
  project: {
    settingProjectButton: () => ReactNode;
    settingProjectModal: () => ReactNode;
  };
  proceeding: {
    settingProceedingButton: () => ReactNode;
    settingProceedingModal: () => ReactNode;
  };
}

export function useCommandKey(): ChatInterfaceReturn {
  const { id: currentProjectId } = useParams();
  const id = currentProjectId ?? "";

  const [isChatOpen, toggleChat] = useToggle(false);
  const [isSettingOpen, toggleSetting] = useToggle(false);

  const { projectId, proceedingId } = useProceedingParams();

  useKeyPress({
    targetKey: "i",
    callback: () => toggleChat(),
  });

  useKeyPress({
    targetKey: "s",
    callback: () => toggleSetting(),
  });

  function renderChatInterface() {
    return isChatOpen && <ChatInterface onClose={toggleChat} />;
  }

  function renderChatButton() {
    return (
      <button
        onClick={toggleChat}
        className={twMerge(ToolStyles.base, ToolStyles.chat)}
      >
        <HiChatAlt className={ToolStyles.icon} />
      </button>
    );
  }

  function settingProjectButton() {
    return (
      <button
        onClick={toggleSetting}
        className={twMerge(ToolStyles.base, ToolStyles.setting)}
      >
        <RiSettings5Fill className={ToolStyles.icon} />
      </button>
    );
  }

  function settingProjectModal() {
    return (
      <SettingModal isOpen={isSettingOpen} onClose={toggleSetting}>
        <DeleteProjectModal onClose={toggleSetting} projectId={id} />
      </SettingModal>
    );
  }
  function settingProceedingButton() {
    return (
      <button
        onClick={toggleSetting}
        className={twMerge(ToolStyles.base, ToolStyles.setting, "bottom-4")}
      >
        <RiSettings5Fill className={ToolStyles.icon} />
      </button>
    );
  }

  function settingProceedingModal() {
    return (
      <SettingModal isOpen={isSettingOpen} onClose={toggleSetting}>
        <DeleteProceedingModal
          onClose={toggleSetting}
          projectId={projectId}
          proceedingId={proceedingId}
        />
      </SettingModal>
    );
  }

  return {
    chat: { renderChatInterface, renderChatButton },
    project: {
      settingProjectButton,
      settingProjectModal,
    },
    proceeding: {
      settingProceedingButton,
      settingProceedingModal,
    },
  };
}
