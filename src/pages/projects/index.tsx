import Header from "@/components/layout/Header";
import ProjectCard from "@/components/chips/projects/ProjectCard";
import CreationItem from "@/components/chips/CreationItem";

// TODO : 한페이지엔 최대 7개의 프로젝트만 보여줄것, 페이지네이션 버튼 구현

export default function ProjectsPage() {
  const fetchdataProjectCardLength = 7;

  return (
    <div>
      <Header title="Ai-Zy 루트페이지" />
      {/*검색창 공용 컴포넌트*/}
      <div className="m-4 flex flex-col items-center justify-center gap-4 border-8">
        <input type="text" />
        <button>검색</button>
      </div>
      {/*twMerge 회의록 리스트 페이지랑 같은 스타일*/}
      <div className="m-16 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center gap-12">
        {Array.from({ length: fetchdataProjectCardLength }).map((_, index) => (
          <ProjectCard
            key={`project-id-${index}`}
            participantCount={10}
            name="프로젝트 이름"
            description="프로젝트 설명"
            gradientFrom="from-black/10"
            gradientTo="to-black/50"
            tag="태그"
            linkTo={`/projects/${index + 1}`}
          />
        ))}
        <CreationItem
          onClick={() => {
            alert("사이드바 오픈");
          }}
        />
      </div>
    </div>
  );
}
