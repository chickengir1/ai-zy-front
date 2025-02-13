import { Link } from "react-router-dom";

export default function TodolistPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">TodolistPage</h1>
      <Link to="/projects">Projects</Link>
    </div>
  );
}
