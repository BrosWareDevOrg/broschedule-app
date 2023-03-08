import Button from '.';
import { fireEvent, render, screen } from '../../utils/tests/renderWithRouter';

const onCLick = jest.fn();

describe('Button Tests', () => {
  it('Should render correctly', () => {
    render(<Button>Press ME</Button>);
    //Check if button is rendered on mock DOM
    const button = screen.getByRole('button', { name: /press me/i });
    expect(button).toBeInTheDocument();
    //Test if button have default background color when it's not define in props
    expect(button).toHaveClass('bg-primary-700');
  });
  it('Should render incorrectly when search for value "press me"', () => {
    render(<Button></Button>);
    expect(
      screen.queryByRole('button', { name: /press me/i })
    ).not.toBeInTheDocument();

    expect(screen.getByRole('button', { name: /button/i })).toHaveTextContent(
      'Button'
    );
  });
  it('Should have background color orange, when pass "bgColor" property as orange value', () => {
    render(<Button bgColor="orange">Click here</Button>);
    //Test if backgound color is the called as bgColor prop and children prop show correctly
    expect(screen.getByRole('button', { name: /click here/i })).toHaveClass(
      'bg-orange-700'
    );
  });
  it('Should change the button value when fire a click', () => {
    render(
      <Button bgColor="orange" onClick={onCLick}>
        Click Here
      </Button>
    );
    const button = screen.getByRole('button', { name: /click here/i });
    expect(button).toBeInTheDocument();
    //Test button click event is correctly working on
    fireEvent.click(button);
    expect(onCLick).toHaveBeenCalled();
  });
});
