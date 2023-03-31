import { useDispatch, useSelector } from 'react-redux';
import '@testing-library/jest-dom';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

beforeEach(() => {
  useDispatch.mockReturnValue(mockDispatch);
  useSelector.mockImplementation((selector) => selector({ global: { isModalActive: false } }));
});

afterEach(() => {
  jest.clearAllMocks();
});

export const mockDispatch = jest.fn();
