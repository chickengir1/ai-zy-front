import { useSearchParams } from "react-router-dom";
import { usePageStore } from "@/store/pageStore";
import { useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function PaginationButton() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, limit, setPage } = usePageStore();

  useEffect(() => {
    const pageParam = searchParams.get("page");
    if (pageParam !== null && Number(pageParam) !== page) {
      setPage(Number(pageParam));
    }
  }, [searchParams, page, setPage]);

  function handlePageChange(newPage: number) {
    return () => {
      if (newPage >= 0) {
        setPage(newPage);
        setSearchParams({ page: newPage.toString(), limit: limit.toString() });
      }
    };
  }

  return (
    <div className="flex items-center justify-center gap-4 py-6">
      <button
        onClick={handlePageChange(page - 1)}
        className={`${buttonStyles.base} ${buttonStyles.hover} ${buttonStyles.disabled}`}
        disabled={page <= 0}
      >
        <HiChevronLeft className="h-5 w-5" />
      </button>

      <div className={buttonStyles.pageIndicatorStyles}>{page + 1}</div>

      <button
        onClick={handlePageChange(page + 1)}
        className={`${buttonStyles.base} ${buttonStyles.hover} ${buttonStyles.disabled}`}
      >
        <HiChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

const buttonStyles = {
  base: "flex items-center justify-center gap-1 px-4 py-2 rounded-lg bg-indigo-600 text-white shadow-md transform transition-all duration-200",
  hover: "hover:shadow-lg hover:from-blue-600 hover:to-indigo-700",
  disabled:
    "disabled:opacity-50 disabled:pointer-events-none disabled:from-gray-400 disabled:to-gray-500",
  pageIndicatorStyles:
    "flex items-center justify-center min-w-[3rem] h-10 rounded-full bg-gray-100 text-gray-800 font-semibold shadow-inner px-3",
};
