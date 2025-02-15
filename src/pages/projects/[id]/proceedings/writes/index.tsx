import Header from "@/components/layout/Header";
import MarkdownEditor from "@/components/chips/markdownEditor/Editor";

export default function WritesPage() {
  return (
    <div>
      <div className="sticky top-0 z-10 bg-white">
        <Header title="프로젝트 문서 작성 페이지" />
      </div>
      <div className="m-4">
        <MarkdownEditor />
      </div>
    </div>
  );
}
