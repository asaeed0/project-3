export function getTime(format = "12hr") {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (format === "12hr") {
    let amPm = "am";
    if (hour > 12) {
      hour = hour - 12;
      amPm = "pm";
    }
    if (hour === 0) {
      hour = 12;
    }
    return `${hour}:${minute}${amPm}`;
  } else {
    return `${hour}:${minute}`;
  }
}
