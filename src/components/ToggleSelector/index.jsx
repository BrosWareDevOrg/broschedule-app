import PropTypes from "prop-types";
const ToggleSelector = ({ isActive = false }) => {
  return (
    <div
      className={`group flex p-[2px] w-10 border-[1px] rounded-[50px] bg-gray-300 ${
        isActive ? 'border-green-700' : 'border-primary-700'
      } transition-all cursor-pointer`}
    >
      <span
        className={`w-4 h-4 flex rounded-[50px] hover:translate-x-1 ${
          isActive
            ? 'bg-green-700 drop-shadow-l translate-x-full'
            : 'bg-primary-700 drop-shadow-br'
        } transition-all`}
      ></span>
    </div>
  );
};

ToggleSelector.propTypes = {
  isActive: PropTypes.bool
}

export default ToggleSelector;
