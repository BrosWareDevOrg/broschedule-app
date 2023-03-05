import { render, fireEvent } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { incrementBy, decrementBy } from '../../redux/global/actions';
import { mockDispatch } from '../../utils/tests/setupTests';
import CounterForTest from './index';

describe('CounterForTest', () => {
  it('renders correctly', () => {
    const container = render(<CounterForTest />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('increments the counter when the increment button is clicked', () => {
    const { getByText } = render(<CounterForTest />);
    const incrementButton = getByText(/increment/i);
    fireEvent.click(incrementButton);
    expect(mockDispatch).toHaveBeenCalledWith(incrementBy(1));
  });

  it('decrements the counter when the decrement button is clicked', () => {
    const { getByText } = render(<CounterForTest />);
    const decrementButton = getByText(/decrement/i);
    fireEvent.click(decrementButton);
    expect(mockDispatch).toHaveBeenCalledWith(decrementBy(1));
  });

  it('increments the counter by the number specified in the increment range input', () => {
    const { getByLabelText, getByText } = render(<CounterForTest />);
    const incrementRangeInput = getByLabelText('primero');
    const incrementButton = getByText(/increment/i);
    fireEvent.change(incrementRangeInput, { target: { value: '5' } });
    fireEvent.click(incrementButton);
    expect(mockDispatch).toHaveBeenCalledWith(incrementBy(5));
  });

  it('decrements the counter by the number specified in the decrement range input', () => {
    const { getByLabelText, getByText } = render(<CounterForTest />);
    const decrementRangeInput = getByLabelText('segundo');
    const decrementButton = getByText(/decrement/i);
    fireEvent.change(decrementRangeInput, { target: { value: '5' } });
    fireEvent.click(decrementButton);
    expect(mockDispatch).toHaveBeenCalledWith(decrementBy(5));
  });

  it('displays the current counter value', () => {
    useSelector.mockImplementation((selector) => selector({ global: { counter: 10 } }));
    const { getByText } = render(<CounterForTest />);
    const counterValue = getByText('10');
    expect(counterValue).toBeInTheDocument();
  });
});
