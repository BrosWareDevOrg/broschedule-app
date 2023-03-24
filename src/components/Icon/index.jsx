import PropTypes from 'prop-types';
import Image from 'next/image';

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

const Icon = ({ icon, containerType }) => {
  const containerStyles = {
    circle: 'bg-white w-14 h-14 rounded-full',
    bigCircle: 'bg-white w-[80px] h-[80px] rounded-full',
    square: 'bg-white w-[80px] h-[80px] rounded-lg border border-black',
  };

  return (
    <div
      className={
        'relative flex justify-center items-center ' +
          containerStyles[containerType] || ''
      }
    >
      <Image
        alt="icon"
        src={`/assets/icons/${icon}.svg`}
        width={50}
        height={50}
        className={containerType === 'square' ? 'w-12' : 'w-8'}
      />
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.oneOf(icons).isRequired,
  containerType: PropTypes.oneOf(['circle', 'bigCircle', 'square', '']),
};

export default Icon;
