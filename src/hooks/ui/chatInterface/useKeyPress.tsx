import { useCallback, useEffect } from "react";

interface UseKeyPressProps {
  targetKey: string;
  callback: () => void;
}

export function useKeyPress({ targetKey, callback }: UseKeyPressProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === targetKey) {
        e.preventDefault();
        callback();
      }
    },
    [callback, targetKey]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
}
