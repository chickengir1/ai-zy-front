import { useSearchParams, useParams } from "react-router-dom";

export function useParamsValues(value: string) {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get(value);

  return { id, searchParams, setSearchParams };
}

export function useParamsId() {
  const { id } = useParams();
  const projectId = id ?? "";

  return projectId;
}

export function useProceedingParams() {
  const path = window.location.pathname;
  const pathRegex = /\/projects\/([^/]+)\/proceedings\/([^/]+)/;
  const match = path.match(pathRegex);

  let projectId = "";
  let proceedingId = "";

  if (match) {
    projectId = match[1];
    proceedingId = match[2];
  }
  return { projectId, proceedingId };
}
