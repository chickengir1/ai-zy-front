import { twMerge } from "tailwind-merge";
import { useTodolistData } from "@/hooks/api/todolist/useTodolistData";
import { MainLayoutStyles } from "@/utils/styles/global";
import ToggleNav from "@/components/ui/toggle/toggleNav";
import SearchInput from "@/components/ui/search/SearchInput";
import { serverDataTransform } from "@/utils/common/serverDataTransform";
import { useCommandKey } from "@/hooks/utility/toggle/useCommandKey";
import Todolist from "./Todolist";

export default function TodolistContainer() {
  const { content } = useTodolistData();
  const { item } = serverDataTransform(content);

  const { chat, project } = useCommandKey();
  const { renderChatInterface, renderChatButton } = chat;
  const { settingProjectButton, settingProjectModal } = project;

  return (
    <>
      <div
        className={twMerge(
          MainLayoutStyles.headerNavPadding,
          "justify-between"
        )}
      >
        <ToggleNav tabIndex={1} />
        <SearchInput placeholder="투두리스트를 검색해보세요" items={item} />
      </div>
      <div className={MainLayoutStyles.padding}>
        <Todolist content={content} />
        {renderChatInterface()}
        {renderChatButton()}
        {settingProjectButton()}
        {settingProjectModal()}
      </div>
    </>
  );
}
