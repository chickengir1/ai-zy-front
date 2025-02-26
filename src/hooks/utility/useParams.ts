import { useSearchParams } from "react-router-dom";

export function useParamsValues(value: string) {
  const [searchParams] = useSearchParams();
  const id = searchParams.get(value);
  return id;
}
