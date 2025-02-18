import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

// NOTE: undefined 체크로직이 없긴한데 undefined 체크 필요할까?
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
