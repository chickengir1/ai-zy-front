import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { MainLayoutClasses, UnitClasses } from "@/utils/styles/globalStyeld";
import Header from "@/components/layout/Header";
import ToggleNav from "@/components/layout/toggleNav";

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
        <ToggleNav />
        <div className="flex items-center gap-2 border-2 border-black p-4">
          <input type="text" />
          <button>검색</button>
        </div>
      </div>
      <Link to="/">홈페이지로 이동</Link>
    </div>
  );
}
