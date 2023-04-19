import NavbarIcon from '../NavbarIcons';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="sticky bottom-0 md:left-0 flex md:flex-col md:gap-12 items-center justify-between py-3 px-10 md:px-3 rounded-t-3xl md:rounded-none w-full md:w-fit h-fit md:h-screen bg-primary-700">
      <Link href="/" className="md:mb-auto">
        <NavbarIcon icon="logo" />
      </Link>
      <Link href="/calendar">
        <NavbarIcon icon="calendar" />
      </Link>
      <Link href="/notifications">
        <NavbarIcon icon="notifications" />
      </Link>
      <Link href="/settings">
        <NavbarIcon icon="perfil" />
      </Link>
      <Link href="/" className="hidden md:flex">
        <NavbarIcon icon="logout" />
      </Link>
    </nav>
  );
}

export default Navbar;
