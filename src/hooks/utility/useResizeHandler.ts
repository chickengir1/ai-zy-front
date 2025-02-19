import { useEffect, useRef } from "react";

export function useResizeHandler(minWidth: number, onResize: () => void) {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        if (window.innerWidth >= minWidth) {
          onResize();
        }
      }, 10);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [minWidth, onResize]);
}
