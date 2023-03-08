import PropTypes from 'prop-types';
import Icon from '../Icon';
import ToggleSelector from '../ToggleSelector';

const icons = [
  'alert',
  'ball',
  'dark',
  'dog',
  'drink',
  'language',
  'light',
  'psychologist',
  'scissor',
  'search',
  'spa',
  'user',
];

const SettingsBlock = ({
  children = '',
  icon = 'user',
  isBoolean = false,
  isActive = false,
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      className={`group w-full flex items-center justify-between gap-[25px] p-3 bg-white ${
        !isBoolean && 'hover:bg-primary-200 cursor-pointer'
      } text-gray-500 text-xl font-semibold rounded-lg`}
    >
      <span className="p-2 rounded-full group-hover:bg-white">
        <Icon icon={icon} containerType="" />
      </span>
      <div className="flex flex-col">{children}</div>
      <div className="flex gap-4 items-center">
        {isBoolean ? (
          <>
            <p className="text-gray-bg-700 text-lg">
              {isActive ? 'On' : 'Off'}
            </p>
            <ToggleSelector isActive={isActive} />
          </>
        ) : (
          <img
            className={`flex p-2 rounded-lg bg-gray-bg-300 group-hover:bg-transparent`}
            src="assets/icons/chevron-right-light.svg"
          />
        )}
      </div>
    </div>
  );
};

SettingsBlock.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.oneOf(icons),
  isBoolean: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default SettingsBlock;
