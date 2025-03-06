import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { usePaginationConfig } from "@/hooks/utility/navigation/usePaginationConfig";
import { twMerge } from "tailwind-merge";
import { PaginationStyles } from "@/utils/styles/global";

interface PaginationButtonProps {
  dataLength: number;
}

export default function PaginationButton({
  dataLength,
}: PaginationButtonProps) {
  const { state, handler } = usePaginationConfig(dataLength);
  const { page, isNextDisabled, showIndicator } = state;
  const { handlePageChange } = handler;

  return (
    <div className={PaginationStyles.container}>
      <button
        onClick={handlePageChange(page - 1)}
        className={twMerge(
          PaginationStyles.button.base,
          PaginationStyles.button.common,
          PaginationStyles.button.hover,
          PaginationStyles.button.active,
          page <= 0 && PaginationStyles.button.disabled
        )}
        disabled={page <= 0}
      >
        <HiChevronLeft className={PaginationStyles.icon.left} />
      </button>
      <div className={PaginationStyles.indicator}>
        {showIndicator ? `Page ${page}` : "Page"}
      </div>
      <button
        onClick={handlePageChange(page + 1)}
        className={twMerge(
          PaginationStyles.button.base,
          PaginationStyles.button.common,
          PaginationStyles.button.hover,
          PaginationStyles.button.active,
          isNextDisabled && PaginationStyles.button.disabled
        )}
        disabled={isNextDisabled}
      >
        <HiChevronRight className={PaginationStyles.icon.right} />
      </button>
    </div>
  );
}
