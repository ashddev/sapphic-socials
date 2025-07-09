export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getMonthFromNumber = (month: number) => {
  return monthsOfYear[month];
};

const getFirstDayOfTheMonth = (month: number) => {
  const firstDayOfMonth = new Date();
  firstDayOfMonth.setMonth(month, 1);
  return firstDayOfMonth.getDay();
};

const getLastDateOfTheMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

export const calendarInit = (selectedMonth: number, selectedYear: number) => {
  const firstDayOfMonth = getFirstDayOfTheMonth(selectedMonth);
  const lastDateOfMonth = getLastDateOfTheMonth(selectedMonth, selectedYear);

  const rows = 6;
  const cols = 7;
  let dates = 1;

  const calendar: number[][] = Array.from({ length: rows }, () =>
    new Array(cols).fill(-1)
  );

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r === 0 && c < firstDayOfMonth) continue;
      if (dates === lastDateOfMonth + 1) break;

      calendar[r][c] = dates;
      dates += 1;
    }
  }

  return calendar;
};

export const isEventOnThisDate = (
  eventDate: string,
  checkDate: number,
  checkMonth: number,
  checkYear: number
) => {
  const event = new Date(eventDate);
  const dateToCheck = new Date(checkYear, checkMonth, checkDate);

  const firstYear = event.getFullYear();
  const firstMonth = event.getMonth();
  const firstDay = event.getDate();
  const secondYear = dateToCheck.getFullYear();
  const secondMonth = dateToCheck.getMonth();
  const secondDay = dateToCheck.getDate();

  return (
    firstYear === secondYear &&
    firstMonth === secondMonth &&
    firstDay === secondDay
  );
};
