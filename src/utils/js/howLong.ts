export function howLong(unix: number): string {
  const nowDate = new Date();
  const date = new Date((unix || 1) * 1000);

  const howLongMinutes = Math.abs(
    Number(new Date(nowDate.getMinutes() - date.getMinutes()))
  );
  const howLongHours = new Date(nowDate.getTime() - date.getTime()).getHours();

  if (howLongHours > 23) {
    return date.toISOString().slice(0, 19).replace("T", " ");
  } else if (howLongHours <= 0) {
    return `${howLongMinutes} минут назад`;
  } else {
    return `${howLongHours} часов назад`;
  }
}
