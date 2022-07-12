export function getFormattedDate(inputDate: string) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return month + '/' + day + '/' + year;
}
