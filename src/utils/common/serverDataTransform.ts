interface DataItem {
  id: string;
  title: string;
}

interface ProjectDataItem {
  id: string;
  title: string;
}

interface ProceedingsDataItem {
  proceedingsId: string;
  title: string;
}

export function serverDataTransform<T extends DataItem>(data: T[]) {
  const item = data.map((item: T) => item.title);
  const id = data.map((item: T) => item.id);

  return { item, id };
}

export function projectDataTransform(data: ProjectDataItem[]) {
  const item = data.map((project: ProjectDataItem) => project.title);
  const idMap = new Map(
    data.map((project: ProjectDataItem) => [project.title, project.id])
  );
  const url = (title: string) => `/projects/${idMap.get(title)}`;
  return { item, idMap, url };
}

export function proceedingsDataTransform(
  data: ProceedingsDataItem[],
  projectId: string
) {
  const item = data.map((item) => item.title);
  const idMap = new Map(data.map((item) => [item.title, item.proceedingsId]));
  const url = (title: string) =>
    `/projects/${projectId}/proceedings/${idMap.get(title)}`;

  return { item, idMap, url };
}
