import { twMerge } from "tailwind-merge";
import { MainLayoutClasses, UnitClasses } from "@/utils/styles/globalStyeld";
import Header from "@/components/layout/Header";
import ToggleNav from "@/components/layout/toggleNav";
import SearchInput from "@/components/ui/search/SearchInput";
import TodoList from "@/components/todolist/Todolist";

export default function TodolistPage() {
  return (
    <div>
      <div className={twMerge(UnitClasses.header)}>
        <Header title="투두리스트 페이지" />
      </div>

      <div
        className={twMerge(
          MainLayoutClasses.headerNavPadding,
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
      <div className={twMerge(MainLayoutClasses.padding)}>
        <TodoList />
      </div>
    </div>
  );
}
