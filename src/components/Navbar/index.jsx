import NavbarIcon from '../NavbarIcons';

function Navbar() {
  return (
    <nav className="bottom-0 md:left-0 flex md:flex-col md:gap-12 items-center justify-between py-3 px-10 md:px-3 rounded-t-3xl md:rounded-none md:w-fit h-fit md:h-screen bg-primary-700">
      <span className='md:mb-auto'>
        <NavbarIcon icon="logo" />
      </span>
      <NavbarIcon icon="calendar" />
      <NavbarIcon icon="bell" />
      <NavbarIcon icon="user" />
      <span className='hidden md:flex'>
        <NavbarIcon icon="logout" />
      </span>
    </nav>
  );
}

export default Navbar;
