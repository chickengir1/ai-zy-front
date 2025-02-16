interface SidebarHeaderProps {
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export default function SidebarHeader({
  setIsSidebarOpen,
}: SidebarHeaderProps) {
  return (
    <>
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-lg font-bold">프로젝트 생성</h2>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsSidebarOpen(false);
          }}
          className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
        >
          닫기
        </button>
      </div>
    </>
  );
}
