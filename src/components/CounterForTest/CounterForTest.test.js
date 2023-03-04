import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementBy, decrementBy } from '../../redux/global/actions';
import CounterForTest from './index';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('CounterForTest', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockImplementation((selector) => selector({ global: { counter: 0 } }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { container } = render(<CounterForTest />);
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

  it('displays the current counter value', () => {
    useSelector.mockImplementation((selector) => selector({ global: { counter: 10 } }));
    const { getByText } = render(<CounterForTest />);
    const counterValue = getByText('10');
    expect(counterValue).toBeInTheDocument();
  });
});
