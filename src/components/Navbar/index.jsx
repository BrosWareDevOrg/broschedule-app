import NavbarIcon from '../NavbarIcons';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const handelClick = (path) => {
    navigate(path);
  };
  return (
    <nav className="md:absolute bottom-0 md:left-0 flex md:flex-col md:gap-12 items-center justify-between py-3 px-10 md:px-3 rounded-t-3xl md:rounded-none md:w-fit h-fit md:h-screen bg-primary-700">
      <span className="md:mb-auto" onClick={() => handelClick('/')}>
        <NavbarIcon icon="logo" />
      </span>
      <span onClick={() => handelClick('/calendar')}>
        <NavbarIcon icon="calendar" />
      </span>
      <span onClick={() => handelClick('/notifications')}>
        <NavbarIcon icon="notifications" />
      </span>
      <span onClick={() => handelClick('/perfil')}>
        <NavbarIcon icon="perfil" />
      </span>
      <span className="hidden md:flex">
        <NavbarIcon icon="logout" />
      </span>
    </nav>
  );
}

export default Navbar;
