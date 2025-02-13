import { useParams } from "react-router-dom";

export default function DocDetailPage() {
  const { id } = useParams();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">DocDetailPage</h1>
      <p className="text-lg">{id}</p>
    </div>
  );
}
