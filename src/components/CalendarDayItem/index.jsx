import PropTypes from 'prop-types';

const CalendarDayItem = ({
  isSelected = false,
  isCurrentDay = false,
  haveAppointments = false,
  disabled = false,
  onClick = () => null,
  children,
  ...props
}) => {
  const styles = {
    general:
      'relative z-0 flex w-8 h-8 items-center justify-center rounded-full border-[1px] ',
    hoverable: 'hover:bg-green-500 hover:border-green-700 cursor-pointer ',
    disabled:
      'cursor-not-allowed text-gray-bg-700 bg-gray-bg-300 border-gray-bg-700 ',
    redDetail:
      'absolute -top-0 -right-0 z-10 w-[10px] h-[10px] bg-tomato-700 rounded-full',
    isSelected: 'border-green-700 text-green-700 ',
    isCurrentDay: 'bg-white text-primary-700 border-white ',
    haveAppointments: 'border-orange-700',
  };
  return (
    <td
      className={`${styles.general} ${isSelected ? styles.isSelected : ''} ${
        isCurrentDay ? styles.isCurrentDay : ''
      } ${haveAppointments ? styles.haveAppointments : ''} ${
        disabled ? styles.disabled : styles.hoverable
      }`}
      onClick={onClick}
      disabled={true}
      {...props}
    >
      {children || ''}
      {!disabled && haveAppointments && (
        <span className={styles.redDetail}></span>
      )}
    </td>
  );
};

CalendarDayItem.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  isCurrentDay: PropTypes.bool,
  haveAppointments: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default CalendarDayItem;
