export function getTime(format = "12hr") {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (format === "12hr") {
    if (hour > 12) {
      hour = hour - 12;
    }
    if (hour === 0) {
      hour = 12;
    }
  }
  return `${hour}:${minute}`;
}
