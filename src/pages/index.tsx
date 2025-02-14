import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";

const titleProps = "루트페이지";

export default function HomePage() {
  return (
    <div>
      <Header title={titleProps} />
      <Link to="/projects">Projects</Link>
    </div>
  );
}
