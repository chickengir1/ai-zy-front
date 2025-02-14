import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";

export default function WritesPage() {
  return (
    <div>
      <Header title="프로젝트 문서 작성 페이지" />
      <Link to="/projects">Projects</Link>
    </div>
  );
}
