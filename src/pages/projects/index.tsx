import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";

export default function ProjectsPage() {
  return (
    <div>
      <Header title="프로젝트 페이지" />
      <Link to="/">Home</Link>
    </div>
  );
}
