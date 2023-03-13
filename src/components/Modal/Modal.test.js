import { fireEvent, render, screen } from '../../utils/tests/renderWithRouter';
import { useDispatch, useSelector } from 'react-redux';
import SettingsBlock from '../SettingsBlock';
import Modal from '.';
import { setModalState } from '../../redux/global/actions';

const renderWithProps = (sections) => render(<Modal sections={sections} />);

const mockDispatch = jest.fn();

beforeEach(() => {
  useDispatch.mockReturnValue(mockDispatch);
  useSelector.mockImplementation((selector) =>
    selector({ global: { isModalActive: true } })
  );
});

const settingsSections = [
  {
    title: 'Account',
    content: (
      <SettingsBlock icon="dog" isBoolean={false}>
        Personal Info
      </SettingsBlock>
    ),
  },
  {
    title: 'Settings',
    content: (
      <>
        <SettingsBlock icon="alert">Notifications</SettingsBlock>
        <SettingsBlock icon="dark" isBoolean={true}>
          Dark Mode
        </SettingsBlock>
        <SettingsBlock icon="language">Language</SettingsBlock>
      </>
    ),
  },
];

describe('Modal Test Suit', () => {
  it('Should render the Modal correctly', () => {
    render(
      <Modal sections={[{ title: 'This is a Modal', content: <p>empty</p> }]} />
    );
    expect(screen.getByText('This is a Modal')).toBeInTheDocument();
  });
  it('Should render with settings options', () => {
    renderWithProps(settingsSections);
    expect(screen.getByText('Account')).toBeInTheDocument();
  });
  it('Should close when click on xmark', () => {
    renderWithProps(settingsSections);
    const closeX = screen.getByText('Account').nextSibling;
    fireEvent.click(closeX);
    expect(mockDispatch).toHaveBeenLastCalledWith(setModalState(false));
  });
});
