//For common uses with react-router-dom we must to build a custom 'render' hook, and use it insthead oficial 'render' from @testing-library/react.
import { render, fireEvent, screen } from '../../utils/tests/renderWithRouter';
import { useSelector } from 'react-redux';
import { incrementBy, decrementBy } from '../../redux/global/actions';
import { mockDispatch } from '../../utils/tests/setupTests';
import CounterForTest from './index';

describe('CounterForTest', () => {
  it('renders correctly', () => {
    const view = render(<CounterForTest />);
    expect(view.firstChild).toMatchSnapshot();
  });

  it('increments the counter when the increment button is clicked', () => {
    render(<CounterForTest />);
    const incrementButton = screen.getByText(/increment/i);
    fireEvent.click(incrementButton);
    expect(mockDispatch).toHaveBeenCalledWith(incrementBy(1));
  });

  it('decrements the counter when the decrement button is clicked', () => {
    render(<CounterForTest />);
    const decrementButton = screen.getByText(/decrement/i);
    fireEvent.click(decrementButton);
    expect(mockDispatch).toHaveBeenCalledWith(decrementBy(1));
  });

  it('increments the counter by the number specified in the increment range input', () => {
    render(<CounterForTest />);
    const incrementRangeInput = screen.getByLabelText('primero');
    const incrementButton = screen.getByText(/increment/i);
    fireEvent.change(incrementRangeInput, { target: { value: '5' } });
    fireEvent.click(incrementButton);
    expect(mockDispatch).toHaveBeenCalledWith(incrementBy(5));
  });

  it('decrements the counter by the number specified in the decrement range input', () => {
    render(<CounterForTest />);
    const decrementRangeInput = screen.getByLabelText('segundo');
    const decrementButton = screen.getByText(/decrement/i);
    fireEvent.change(decrementRangeInput, { target: { value: '5' } });
    fireEvent.click(decrementButton);
    expect(mockDispatch).toHaveBeenCalledWith(decrementBy(5));
  });

  it('displays the current counter value', () => {
    useSelector.mockImplementation((selector) =>
      selector({ global: { counter: 10 } })
    );
    render(<CounterForTest />);
    const counterValue = screen.getByText('10');
    expect(counterValue).toBeInTheDocument();
  });
});
