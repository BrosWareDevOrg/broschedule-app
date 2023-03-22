import PropTypes from 'prop-types';
import { useState } from 'react';
import SVGExporter from '../../utils/functions/SVGExport';

const NavbarIcon = ({ icon = 'bell' }) => {
  const [isHovering, setHoveringState] = useState(false);
  const svgProps = SVGExporter(icon);
  return (
    <div
      className="flex items-center justify-center w-6 h-6 md:w-16 md:h-16 md:p-4 md:rounded-md md:hover:bg-gray-bg-500 md:cursor-pointer"
      onMouseOver={() => setHoveringState(true)}
      onMouseLeave={() => setHoveringState(false)}
    >
      <svg
        width={svgProps.width}
        height={svgProps.height}
        viewBox={svgProps.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        fill={isHovering ? '#8359E3' : '#C0C0C080'}
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
    'bell',
    'user',
  ]),
  viewBox: PropTypes.string,
};

export default NavbarIcon;
