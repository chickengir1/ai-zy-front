import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">NotFound</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
