import { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useParamsValues } from "@/hooks/utility/common/useParams";
import { usePageStore } from "@/store/utilityStore/pageStore";
import { paginationConfig } from "@/utils/common/constans";

export function usePaginationConfig(dataLength: number) {
  const location = useLocation();
  const { page, setPage, reset } = usePageStore();

  const { searchParams, setSearchParams } = useParamsValues("page");

  const prevPathRef = useRef(location.pathname);

  const removePageParamFromUrl = useCallback(() => {
    if (!searchParams.has("page")) return;
    const newParams = new URLSearchParams(
      [...searchParams.entries()].filter(([key]) => key !== "page")
    );

    setSearchParams(newParams, { replace: true });
  }, [searchParams, setSearchParams]);

  const handlePathChange = useCallback(() => {
    reset();
    removePageParamFromUrl();
    prevPathRef.current = location.pathname;
  }, [reset, removePageParamFromUrl, location.pathname]);

  const syncPageWithUrlParams = useCallback(() => {
    const pageParam = searchParams.get("page");
    const pageValue = pageParam !== null ? Number(pageParam) : 0;

    if (pageValue !== page) {
      setPage(pageValue);
    }
  }, [searchParams, page, setPage]);

  useEffect(() => {
    const isPathChanged = prevPathRef.current !== location.pathname;
    if (isPathChanged) {
      handlePathChange();
    }

    if (!isPathChanged) {
      syncPageWithUrlParams();
    }
  }, [location.pathname, handlePathChange, syncPageWithUrlParams]);

  const handlePageChange = useCallback(
    (newPage: number) => () => {
      const isPageValid = newPage >= 0;

      if (isPageValid) {
        setSearchParams({ page: String(newPage) }, { replace: true });
      }
    },
    [setSearchParams]
  );

  const { isNextDisabled, showIndicator } = paginationConfig(dataLength, page);

  return {
    state: { page, isNextDisabled, showIndicator },
    handler: { handlePageChange },
  };
}
