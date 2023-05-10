import { render, screen } from '@/utils/tests/renderWithRouter';
import CalendarComponent from '.';

describe('Render Calendar Component in UI correctly', () => {
  it('Should render Calendar Component with default props', () => {
    render(<CalendarComponent />);
    expect(screen.getByText('Enero')).toBeInTheDocument();
    expect(screen.getByText('Febrero')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
