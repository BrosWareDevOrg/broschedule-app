import { render, screen, fireEvent } from '@/utils/tests/renderWithRouter';
import dayjs from 'dayjs';
import CalendarComponent from '.';

const currentDate = new dayjs();
const currentDay = currentDate.date();
const currentMonth = currentDate.month();

const random = {
  DAY_EXPRESION: Math.round(Math.random() * 28),
  MONTH_EXPRESION: Math.round(Math.random() * 11),
};

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

const generateRandomDayNumber = (number) => {
  return currentDay === number
    ? generateRandomDayNumber(random.DAY_EXPRESION)
    : number;
};
const generateRandomMonthNumber = (number) => {
  return currentMonth === number
    ? generateRandomDayNumber(random.MONTH_EXPRESION)
    : number;
};

describe('Render Calendar Component in UI correctly', () => {
  it('Should render Calendar Component with default props', () => {
    render(<CalendarComponent />);
    expect(screen.getByText('Enero')).toBeInTheDocument();
    expect(screen.getByText('Febrero')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('Should catch a random day on the calendar and change the states', () => {
    render(<CalendarComponent />);
    const randomNumber = generateRandomDayNumber(random.DAY_EXPRESION);

    const randomDay = screen.getByLabelText(`day ${randomNumber}`);
    expect(randomDay).toBeInTheDocument();

    expect(randomDay).toHaveClass(
      'relative z-0 flex w-8 h-8 items-center justify-center rounded-full border-[1px] hover:bg-green-500 hover:border-green-700 cursor-pointer'
    );

    fireEvent.click(randomDay);
    expect(randomDay).toHaveClass(
      'relative z-0 flex w-8 h-8 items-center justify-center rounded-full border-[1px] hover:bg-green-500 hover:border-green-700 cursor-pointer border-green-700 text-green-700'
    );
  });

  it('Should manage calendar header months selector when click', () => {
    render(<CalendarComponent />);

    const randomMonthNumber = generateRandomMonthNumber(random.MONTH_EXPRESION);
    const randomMonth = screen.getByLabelText(
      `${months[randomMonthNumber].toLowerCase()}`
    );
    expect(randomMonth).toBeInTheDocument();
    expect(randomMonth).toHaveClass(
      'flex flex-col gap-1 items-center cursor-pointer text-gray-700 hover:text-gray-300'
    );

    fireEvent.click(randomMonth);

    expect(randomMonth).toHaveClass(
      'flex flex-col gap-1 items-center cursor-pointer text-white hover:text-gray-300'
    );
  });
});
