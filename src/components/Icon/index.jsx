import PropTypes from 'prop-types';

export const icons = [
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
    square: 'bg-white w-[118px] h-[118px] rounded-lg border border-black',
  };

  return (
    <div className={'flex justify-center items-center ' + containerStyles[containerType] || ''}>
      <img src={`/assets/icons/${icon}.svg`} className={containerType === 'square' ? 'w-3/4' : 'w-8'} alt="icon"/>
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.oneOf(icons).isRequired,
  containerType: PropTypes.oneOf(['circle', 'bigCircle', 'square', '']),
};

export default Icon;
