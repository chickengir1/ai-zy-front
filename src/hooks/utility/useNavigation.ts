import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export function useNavigation() {
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const goTo = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  return { goBack, goTo };
}
