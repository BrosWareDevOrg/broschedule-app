import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import SVGExporter from '../../utils/functions/SVGExport';

const NavbarIcon = ({ icon = 'notifications' }) => {
  const location = useLocation();
  const currentLocation = location.pathname;
  const svgProps = SVGExporter(icon);
  return (
    <div className="group flex items-center justify-center w-8 h-8 p-1 md:w-16 md:h-16 md:p-4 md:rounded-md md:hover:bg-gray-bg-500 md:cursor-pointer transition-all">
      <svg
        className="group-hover:fill-primary-700"
        width={svgProps.width}
        height={svgProps.height}
        viewBox={svgProps.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        fill={currentLocation.includes(icon) ? 'white' : '#C0C0C080'}
      >
        {svgProps.paths.map((path, index) => {
          return <path d={path} key={index} fillOpacity="0.6" />;
        })}
      </svg>
    </div>
  );
};

NavbarIcon.propTypes = {
  icon: PropTypes.oneOf([
    'logo',
    'calendar',
    'settings',
    'logout',
    'notifications',
    'perfil',
  ]),
  viewBox: PropTypes.string,
};

export default NavbarIcon;
