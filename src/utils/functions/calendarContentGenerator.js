import dayjs from 'dayjs';
import IsoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(IsoWeek);

export const now = new dayjs();

export const fillTableRows = (month) => {
  let tableRows = [];
  let rowCells = [];
  let dayNumber = 1;
  const selectedMonth = now.month(month);
  const initialWeekDay = selectedMonth.date(1).isoWeekday();
  const lastDayOfSelectedMonth = selectedMonth.endOf('month').date();

  while (dayNumber <= lastDayOfSelectedMonth) {
    //Weeks iterator
    for (let weekDayNumber = 1; weekDayNumber <= 7; weekDayNumber++) {
      const dayValue = dayNumber;
      let dayOptions = {};
      // Refresh row matriz to geenrate new week days options
      if (weekDayNumber === 1) {
        rowCells = [];
      }
      //Condition for find and return the first day of the month in the correct day of week
      if (
        (dayNumber === 1 && initialWeekDay !== weekDayNumber) ||
        dayNumber > lastDayOfSelectedMonth
      ) {
        dayOptions = { disabled: true, label: '' };
      } else {
        dayNumber++;
        dayOptions = { disabled: false, label: dayValue };
      }

      rowCells.push(dayOptions);

      if (weekDayNumber === 7) {
        tableRows.push(rowCells);
        // Refresh week iterator.
        dayNumber <= lastDayOfSelectedMonth && (weekDayNumber = 0);
      }
    }
  }
  return tableRows;
};
