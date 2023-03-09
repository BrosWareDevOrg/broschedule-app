import SettingsBlock from '.';
import { render, screen } from '../../utils/tests/renderWithRouter';

const rendered = (
  isActive = false,
  isBoolean = false,
  icon = 'user',
  children = 'Settings'
) =>
  render(
    <SettingsBlock isActive={isActive} isBoolean={isBoolean} icon={icon}>
      {children}
    </SettingsBlock>
  );
describe('SettingsBlock Component test suits', () => {
  it('Should render correctly with its default values', () => {
    rendered();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Settings').parentElement).toHaveClass(
      'group w-full flex items-center justify-between gap-[25px] p-3 bg-white hover:bg-primary-200 cursor-pointer text-gray-500 text-xl font-semibold rounded-lg'
    );
  });
  it('Should render with props correctly', () => {
    rendered(false, false, 'alert', 'Notifications');
    expect(screen.getByText('Notifications')).toBeInTheDocument();
    expect(screen.getByText('Notifications').parentElement).toHaveClass(
      'group w-full flex items-center justify-between gap-[25px] p-3 bg-white hover:bg-primary-200 cursor-pointer text-gray-500 text-xl font-semibold rounded-lg'
    );
    expect(
      screen.getByText('Notifications').parentElement.firstChild.childNodes[0]
        .firstChild
    ).toHaveAttribute('src', '/assets/icons/alert.svg');
  });
  it('Should be render with chevron right image', () => {
    rendered(false, false, 'alert', 'Notifications');
    expect(screen.getByText('Notifications').nextSibling).toHaveClass(
      'flex gap-4 items-center'
    );
    expect(
      screen.getByText('Notifications').nextSibling.childNodes[0]
    ).toHaveAttribute('src', 'assets/icons/chevron-right-light.svg');
    expect(
      screen.getByText('Notifications').nextSibling.childNodes[0]
    ).toHaveClass(
      'flex p-2 rounded-lg bg-gray-bg-300 group-hover:bg-transparent'
    );
  });
  it('Should be render with ToggleSelector inside if "isBoolean" prop is "true"', () => {
    rendered(false, true, 'dark', 'Dark Mode');
    expect(
      screen.getByText('Dark Mode').nextSibling.firstChild.textContent
    ).toContain('Off');
    expect(screen.getByText('Dark Mode').nextSibling.childNodes[0]).toHaveClass(
      'text-gray-bg-700 text-lg'
    );
    expect(screen.getByText('Dark Mode').nextSibling.childNodes[1]).toHaveClass(
      'group flex p-[2px] w-10 border-[1px] rounded-[50px] bg-gray-300 border-primary-700 transition-all cursor-pointer'
    );
    expect(
      screen.getByText('Dark Mode').nextSibling.childNodes[1].firstChild
    ).toHaveClass(
      'w-4 h-4 flex rounded-[50px] hover:translate-x-1 bg-primary-700 drop-shadow-br transition-all'
    );
  });
});
