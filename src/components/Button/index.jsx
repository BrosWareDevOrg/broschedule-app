import PropTypes from 'prop-types';

const Button = ({
  children = 'Button',
  action = () => {},
  solid = true,
  bgColor = 'primary',
}) => {
  const bgColorStyle = 'bg-'.concat(bgColor).concat('-700');
  return (
    <button
      className={`flex py-4 px-8 gap-4 rounded-xl font-bold text-2x ${
        solid ? bgColorStyle : 'bg-transparent text-primary-700'
      }`}
      onClick={() => {
        action;
      }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  bgColor: PropTypes.oneOf(['primary', 'orange', 'tomato', 'green']).isRequired,
  solid: PropTypes.bool.isRequired,
  action: PropTypes.func,
};

export default Button;
