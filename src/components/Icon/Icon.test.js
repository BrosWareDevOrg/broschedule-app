/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import Icon from './index';

describe('Icon', () => {
  it('The icon container and the icon img are rendered correctly', () => {
    render(<Icon icon="alert" />);
    const iconContainer = screen.getByRole('img').parentElement;
    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
    expect(iconContainer).toBeInTheDocument();
  });

  it('Icon renders correctly with the right src attribute', () => {
    render(<Icon icon="alert" />);
    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', '/assets/icons/alert.svg');
  });

  it('Icon container renders correctly with bigCircle container type', () => {
    render(<Icon icon="alert" containerType="bigCircle" />);
    const iconContainer = screen.getByRole('img').parentElement;
    expect(iconContainer).toBeInTheDocument();
    const bigCircleStyles = 'flex justify-center items-center bg-white w-[80px] h-[80px] rounded-full';
    expect(iconContainer).toHaveClass(bigCircleStyles);
  });

  it('renders correctly with circle container type', () => {
    render(<Icon icon="alert" containerType="circle" />);
    const iconContainer = screen.getByRole('img').parentElement;
    expect(iconContainer).toBeInTheDocument();
    const circleStyles = 'flex justify-center items-center bg-white w-14 h-14 rounded-full';
    expect(iconContainer).toHaveClass(circleStyles);
  });

  it('renders correctly with square container type', () => {
    render(<Icon icon="alert" containerType="square" />);
    const iconContainer = screen.getByRole('img').parentElement;
    expect(iconContainer).toBeInTheDocument();
    const squareStyles = 'flex justify-center items-center bg-white w-[80px] h-[80px] rounded-lg border border-black';
    expect(iconContainer).toHaveClass(squareStyles);
    expect(screen.getByRole('img')).toHaveClass('w-12');
  });

  it('renders correctly with an empty container type', () => {
    render(<Icon icon="alert" containerType="" />);
    const iconContainer = screen.getByRole('img').parentElement;
    expect(iconContainer).toBeInTheDocument();
    const defaultStyle = 'flex justify-center items-center';
    expect(iconContainer).toHaveClass(defaultStyle);
    expect(screen.getByRole('img')).toHaveClass('w-8');
  });
});
