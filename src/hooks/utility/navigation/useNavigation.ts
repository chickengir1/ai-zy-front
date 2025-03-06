/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function useNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = useCallback(() => {
    if (document.referrer.includes(import.meta.env.VITE_AUTH0_DOMAIN)) {
      navigate("/project", { replace: true });
    } else {
      navigate(-1);
    }
  }, [navigate, location]);

  const goTo = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  return { goBack, goTo };
}
