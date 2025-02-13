import { Link, useParams } from "react-router-dom";

export default function ProjectPage() {
  const { id } = useParams();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">ProjectPage</h1>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <p className="text-lg">{id}</p>
    </div>
  );
}
