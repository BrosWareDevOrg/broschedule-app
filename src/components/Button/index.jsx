'use client';
import PropTypes from 'prop-types';

const Button = ({
  children = 'Button',
  onClick = () => {},
  isSolid = true,
  bgColor = 'primary',
}) => {
  const styles = {
    solid: `bg-${bgColor}-700 border-2 border-${bgColor}-700 hover:bg-transparent hover:text-primary-700`,
    transparent: `bg-transparent text-${bgColor}-700 border-2 border-${bgColor}-700 hover:bg-primary-700 hover:text-white`,
  };
  return (
    <button
      className={`flex py-2 px-4 gap-4 rounded-2xl font-bold text-2x drop-shadow-md cursor-pointer transition-all ${
        isSolid ? `${styles.solid}` : `${styles.transparent}`
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
  onClick: PropTypes.func,
};

export default Button;
