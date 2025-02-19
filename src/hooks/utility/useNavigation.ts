import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

// NOTE: undefined 체크로직이 없긴한데 undefined 체크 필요할까?
// NOTE: useCallback -> useMemo로 변경 참조값 변경 방지
export function useNavigation() {
  const navigate = useNavigate();

  const goBack = useMemo(() => {
    return () => {
      navigate(-1);
    };
  }, [navigate]);

  const goTo = useMemo(() => {
    return (path: string) => {
      navigate(path);
    };
  }, [navigate]);

  return { goBack, goTo };
}
