import { useState, useMemo } from "react";

export function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = useMemo(() => {
    return () => {
      setState((prev) => !prev);
    };
  }, []);

  return [state, toggle] as const;
}
