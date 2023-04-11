'use client';
import { useState, useEffect } from 'react';
import CalendarMonthsHeader from '../CalendarMonthsHeader';
import CalendarDayItem from '../CalendarDayItem';
import { fillTableRows, now } from '@/utils/functions/caneldarContentGenerator';

const CalendarComponent = () => {
  const [tableRows, setTableRows] = useState([]);
  const [daySelected, setDaySelected] = useState(now.date());
  const [monthSelected, setMonthSelected] = useState(now.month());

  useEffect(() => {
    const newTableRows = fillTableRows(monthSelected);
    setTableRows(newTableRows);
  }, [monthSelected]);

  return (
    <section className="bg-primary-700 flex flex-col p-3 rounded-t-3xl w-full md:max-w-fit">
      <CalendarMonthsHeader
        monthSelected={monthSelected}
        setMonthSelected={setMonthSelected}
      />
      <table>
        <thead>
          <tr className="p-1 flex justify-between items-center font-bold">
            <td>Lun</td>
            <td>Mar</td>
            <td>Mie</td>
            <td>Jue</td>
            <td>Vie</td>
            <td>Sab</td>
            <td>Dom</td>
          </tr>
        </thead>
        <tbody>
          {tableRows?.map((rows, rowIndex) => {
            return (
              <tr
                key={rowIndex}
                aria-label={`week ${rowIndex}`}
                className="p-1 flex justify-between items-center font-bold"
              >
                {rows.map((row, index) => {
                  return (
                    <CalendarDayItem
                      key={rowIndex.toString().concat(index)}
                      disabled={row.disabled}
                      isSelected={row.label === daySelected}
                      isCurrentDay={row.label === now.date()}
                      onClick={() => setDaySelected(row.label)}
                    >
                      {row.label}
                    </CalendarDayItem>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default CalendarComponent;
