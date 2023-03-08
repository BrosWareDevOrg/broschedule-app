import PropTypes from 'prop-types';

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

const SettingsBlock = ({ children = '', icon = 'user' }) => {
  return (
    <div className="flex items-center justify-between gap-[25px] p-3">
      <img src={`/assets/icons/${icon}.svg`} />
      {children}
    </div>
  );
};


SettingsBlock.propTypes = {
  icon: PropTypes.oneOf(icons)
};


export default SettingsBlock;
