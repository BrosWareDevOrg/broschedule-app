import {
  defaultRouter as router,
  fireEvent,
  render,
  screen,
} from '../../utils/tests/renderWithRouter';
import SettingsBlock from '../SettingsBlock';
import Modal from '.';

const renderWithProps = (sections) =>
  render(<Modal sections={sections || settingsSections} />);

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

  // Tests that the modal has proper styling and classes applied.
  it('test proper styling and classes applied', () => {
    renderWithProps();
    const modalBackground = screen.getByLabelText('modal background');
    expect(modalBackground).toHaveClass(
      'fixed z-[10000] top-0 left-0 w-screen h-screen grid place-items-center bg-black-500 backdrop-blur-sm cursor-default'
    );

    const modalContent = modalBackground.firstChild;
    expect(modalContent).toHaveClass(
      'relative flex flex-col p-8 gap-8 font-semibold text-primary-700 text-2xl sm:text-4xl rounded-lg bg-[url("/assets/images/white-circle-bg.jpg")] bg-cover bg-no-repeat'
    );

    const xMark = screen.getByLabelText('x mark');
    expect(xMark).toHaveAttribute('src', '/assets/icons/xmark.svg');
    expect(xMark).toHaveClass(
      'p-1 w-9 h-9 cursor-pointer rounded-md hover:bg-primary-200'
    );
  });

  it('Should close when click on xmark', () => {
    renderWithProps();
    const closeX = screen.getByLabelText('x mark');

    fireEvent.click(closeX);

    expect(router.back).toHaveBeenCalled();
  });
  // Tests that the modal renders with custom sections and children.
  it('test render modal with custom sections and children', () => {
    const sections = [
      { title: 'Section 1', content: <p>Section 1 Content</p> },
      { title: 'Section 2', content: <p>Section 2 Content</p> },
      { title: 'Child Section', content: <p>Child Content</p> },
    ];
    renderWithProps(sections);
    const modalTitle1 = screen.getByLabelText('section Section 1');
    const modalTitle2 = screen.getByLabelText('section Section 2');
    const childContent = screen.getByText('Child Content');
    expect(modalTitle1).toBeInTheDocument();
    expect(modalTitle2).toBeInTheDocument();
    expect(childContent).toBeInTheDocument();
  });

  // Tests that clicking outside the modal content closes the modal.
  it('test clicking outside modal content', () => {
    renderWithProps();
    const modalBackground = screen.getByLabelText('modal background');
    fireEvent.click(modalBackground);
    expect(router.back).toHaveBeenCalled();
  });

  // Tests that pressing the 'Escape' key closes the modal.
  it('test pressing escape key', () => {
    renderWithProps();
    fireEvent.keyUp(document, { key: 'Escape', code: 'Escape' });
    expect(router.back).toHaveBeenCalled();
  });
});
