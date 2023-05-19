'use client';
import PropTypes from 'prop-types';
import { useState } from 'react';

const CalendarMonthsHeader = ({
  monthSelected = 1,
  setMonthSelected = () => {},
}) => {
  const [isDragging, setDragging] = useState(false);
  const [clickStartPointX, setStartX] = useState(0);
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const handleDragEvent = (e) => {
    const { target, clientX } = e;
    if (isDragging) {
      const deltaX = clickStartPointX - clientX;
      target.scrollLeft += deltaX;
      setStartX(clientX);
    }
  };

  return (
    <ul
      aria-label="calendarHeader"
      className={`flex items-center gap-16 md:max-w-sm max-w-full font-semibold overflow-y-auto scrollbar-hide ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      onMouseDown={(e) => {
        setDragging(true);
        setStartX(e.clientX);
      }}
      onMouseUp={() => {
        setDragging(false);
        setStartX(0);
      }}
      onMouseLeave={() => {
        setDragging(false);
        setStartX(0);
      }}
      onMouseMove={(e) => handleDragEvent(e)}
    >
      {months.map((month, index) => {
        const isSelectedMonth = monthSelected === index ? true : false;
        return (
          <li
            key={index}
            aria-label={month.toLowerCase()}
            className={`flex flex-col gap-1 items-center cursor-pointer ${
              isSelectedMonth ? 'text-white' : 'text-gray-700'
            } hover:text-gray-300`}
            onClick={() => setMonthSelected(index)}
          >
            {month}
            {isSelectedMonth && (
              <span className="w-1 h-1 bg-white rounded-full"></span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

CalendarMonthsHeader.propTypes = {
  monthSelected: PropTypes.number,
  setMonthSelected: PropTypes.func,
};

export default CalendarMonthsHeader;
