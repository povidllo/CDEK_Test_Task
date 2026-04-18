export const parseDate = (time: string) => {
  return new Date(time)
    .toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace("в ", "");
};
