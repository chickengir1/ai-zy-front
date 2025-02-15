import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";

export default function ProceedingsPage() {
  return (
    <div>
      <Header title="프로젝트 문서 페이지" />
      <Link to="/">홈페이지로 이동</Link>
    </div>
  );
}
