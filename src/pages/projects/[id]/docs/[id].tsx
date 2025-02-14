import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";

export default function DocDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <Header title="프로젝트 문서 상세 페이지" />
      <p className="text-lg">{id}</p>
    </div>
  );
}
