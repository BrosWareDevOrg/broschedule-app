import { render, screen } from '@/utils/tests/renderWithRouter';
import CalendarMonthsHeader from '.';

describe('Should render the CalendarHeaderComponent', () => {
  it('Should render with default props correctly', () => {
    render(<CalendarMonthsHeader />);
    expect(screen.getByText('Enero')).toBeInTheDocument();
  });
});
