import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";

export default function TodolistPage() {
  return (
    <div>
      <Header title="투두리스트 페이지" />
      <Link to="/projects">Projects</Link>
    </div>
  );
}
