import Button from '.';
import { fireEvent, render, screen } from '../../utils/tests/renderWithRouter';

const handleClick = (event) => {
  event.target.textContent = 'Clicked';
};

describe('Button Tests', () => {
  it('Should render correctly', () => {
    render(<Button>Press ME</Button>);
    const button = screen.getByRole('button', { name: /press me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary-700');
  });
  it('Should render incorrectly when search for value "press me"', () => {
    render(<Button></Button>);
    expect(
      screen.queryByRole('button', { name: /press me/i })
    ).not.toBeInTheDocument();
  });
  it('Should have background color orange, when pass "bgColor" property as orange value', () => {
    render(<Button bgColor="orange">Click here</Button>);
    expect(screen.getByRole('button', { name: /click here/i })).toHaveClass(
      'bg-orange-700'
    );
  });
  it('Should change the button value when fire a click', () => {
    render(
      <Button bgColor="orange" onClick={handleClick}>
        Click Here
      </Button>
    );
    const button = screen.getByRole('button', { name: /click here/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(
      screen.getByRole('button', { name: /clicked/i })
    ).toBeInTheDocument();
  });
});
