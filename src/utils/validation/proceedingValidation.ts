export function validateProceeding(proceeding: Proceeding.Proceeding) {
  const isTitleEmpty = !proceeding.title.trim();
  const isContentEmpty = !proceeding.content.trim();
  return !(isTitleEmpty || isContentEmpty);
}
