import { Link, useParams } from "react-router-dom";
import Header from "@/components/layout/Header";

export default function ProjectPage() {
  const { id } = useParams();

  return (
    <div>
      <Header title="프로젝트 페이지" />
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <p className="text-lg">{id}</p>
    </div>
  );
}
