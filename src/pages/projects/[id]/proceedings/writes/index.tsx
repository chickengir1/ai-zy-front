import Header from "@/components/layout/Header";
import MarkdownEditor from "@/components/chips/markdownEditor/Editor";
import {
  DocumentClassesStyles,
  UnitClassesStyles,
} from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";

export default function WritesPage() {
  return (
    <div>
      <div className={twMerge(UnitClassesStyles.header)}>
        <Header title="프로젝트 문서 작성 페이지" />
      </div>
      <div className={twMerge(DocumentClassesStyles.layoutClasses)}>
        <MarkdownEditor />
      </div>
    </div>
  );
}
