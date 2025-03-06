import { useEffect, useCallback } from "react";
import { MIN_WIDTH } from "@/utils/common/constans";

function useWidthChecker() {
  const checkWidth = useCallback(() => {
    const isSmallScreen = window.innerWidth < MIN_WIDTH;
    const currentPath = window.location.pathname;

    if (currentPath === "/unsupported") return;

    if (isSmallScreen) {
      window.location.replace("/unsupported");
    }
  }, []);

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [checkWidth]);
}

export default useWidthChecker;
