'use client';
import { useState } from 'react';
const CalendarComponent = () => {
  const date = new Date();
  const [monthSelected, setMonthSelected] = useState(date.getMonth());
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
    if (isDragging) {
      const { target, clientX } = e;
      target.scrollLeft += clickStartPointX - clientX;
    }
  };

  return (
    <section className="bg-primary-700 flex flex-col p-3 rounded-t-3xl w-full md:max-w-fit">
      <ul
        className={`flex gap-16 md:max-w-sm max-w-full font-semibold overflow-y-auto scrollbar-hide ${
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
          const isSelectedMonth = monthSelected === index + 1 ? true : false;
          return (
            <li
              key={index}
              className={`flex flex-col gap-1 items-center cursor-pointer ${
                isSelectedMonth ? 'text-white' : 'text-gray-700'
              } hover:text-gray-300`}
              onClick={() => setMonthSelected(index + 1)}
            >
              {month}
              {isSelectedMonth && (
                <span className="w-1 h-1 bg-white rounded-full"></span>
              )}
            </li>
          );
        })}
      </ul>
      <div></div>
    </section>
  );
};

export default CalendarComponent;
