import BooleanSelector from '.';
import { render, screen } from '../../utils/tests/renderWithRouter';

const rendered = (isActive) =>
  render(
    <div data-testid="container">
      <BooleanSelector isActive={isActive} />
    </div>
  );

describe('BooleanSelector test suit', () => {
  it('Should render as default "isAcive" state', () => {
    rendered(false);
    const container = screen.getByTestId('container');
    expect(container).toBeInTheDocument();
    //Here we expect to render the Boolean Selector 'div' in default colors class
    expect(container.children[0]).toHaveClass(
      'group flex p-[2px] w-10 border-[1px] rounded-[50px] bg-gray-300 border-primary-700 transition-all cursor-pointer'
    );
  });
  it("Should render it's span in default colors", () => {
    rendered(false);
    const container = screen.getByTestId('container');
    expect(container.firstChild.firstChild).toHaveClass(
      'w-4 h-4 flex rounded-[50px] bg-primary-700 drop-shadow-br'
    );
  });
  it('Should throw if ask for invalid color properties', () => {
    rendered(false);
    const container = screen.getByTestId('container');
    expect(container.firstChild.firstChild).not.toHaveClass('bg-green');
  });
  it('Should render component in "green" color when set "true" at his "isActive" property', () => {
    rendered(true);
    const container = screen.getByTestId('container');
    //Here we expect to render the Boolean Selector 'div' in green colors class
    expect(container.firstChild.firstChild).toHaveClass(
      'w-4 h-4 flex rounded-[50px] bg-green-700 drop-shadow-l translate-x-full transition-all'
    );
  });
});
