export function validateDocument(doc: Docs.Document) {
  const isTitleEmpty = !doc.title.trim();
  const isContentEmpty = !doc.content.trim();
  return !(isTitleEmpty || isContentEmpty);
}
