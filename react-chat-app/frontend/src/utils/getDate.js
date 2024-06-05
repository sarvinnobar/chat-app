const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.toLocaleString("default", {
  month: "long",
});
export const dateString = `${currentMonth} ${currentDay}`;
