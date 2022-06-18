const date = new Date();
export const Today = {
  day: date.getDate() >= 10 ? date.getDate() : "0" + date.getDate(),
  month: date.getMonth() >= 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1),
  year: date.getFullYear(),
};
