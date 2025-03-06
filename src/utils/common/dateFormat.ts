const locale = ["ko-KR", "en-US", "ja-JP"];

export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString(locale[0], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
