import PropTypes from 'prop-types';

const Button = ({
  children = 'Button',
  onClick = () => {},
  isSolid = true,
  bgColor = 'primary',
}) => {
  const bgColorStyle = `bg-${bgColor}-700`;
  return (
    <button
      className={`flex py-4 px-8 gap-4 rounded-xl font-bold text-2x ${
        isSolid ? bgColorStyle : 'bg-transparent text-primary-700'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  bgColor: PropTypes.oneOf(['primary', 'orange', 'tomato', 'green']),
  isSolid: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
