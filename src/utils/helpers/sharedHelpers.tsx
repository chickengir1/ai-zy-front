import { useProceedingMapStore } from "@/store/documentMapStore";

export function renderOptions(items: string[]) {
  return items.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
}

export function documentParams() {
  const path = window.location.pathname;
  const pathRegex = /\/projects\/([^/]+)\/proceedings\/([^/]+)/;
  const match = path.match(pathRegex);

  let projectId = "";
  let documentId = "";

  if (match) {
    projectId = match[1];
    documentId = match[2];
  }
  return { projectId, documentId };
}

export const getDocumentMapItems = () => {
  const { proceedingMap } = useProceedingMapStore.getState();

  return proceedingMap.map((item) => ({
    id: item.id,
    display: item.name,
  }));
};
