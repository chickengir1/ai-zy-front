import { twMerge } from "tailwind-merge";
import {
  MainLayoutClassesStyles,
  UnitClassesStyles,
} from "@/utils/styles/globalStyeld";
import Header from "@/components/layout/header/Header";
import ToggleNav from "@/components/layout/toggle/toggleNav";
import SearchInput from "@/components/ui/search/SearchInput";
import TodoList from "@/components/schedule/todolist/Todolist";

export default function TodolistPage() {
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
      <div className={twMerge(MainLayoutClassesStyles.padding)}>
        <TodoList />
      </div>
    </div>
  );
}
