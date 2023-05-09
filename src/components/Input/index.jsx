const Input = ({
  type,
  label,
  name,
  options = ['option 1', 'option 2', 'option 3'],
  ...props
}) => {
  return (
    <label
      htmlFor={name}
      className="text-primary-700 font-semibold flex flex-col gap-1"
    >
      {type !== 'select' ? (
        <>
          {label}
          <input
            className="bg-primary-200 appearance-none text-primary-700 outline-none border-2 border-primary-700 rounded-lg placeholder:text-primary-700 h-10 pl-3"
            type={type}
            id={name}
            name={name}
            {...props}
          />
        </>
      ) : (
        <select
          id={name}
          className="flex justify-center items-center px-4 py-2 rounded-2xl bg-primary-200 border-2 outline-none text-primary-700 text-lg border-primary-700"
        >
          <option hidden value='0'>{label}</option>
          {options.map((item, index) => {
            return (
              <option
                key={index}
                className="flex justify-center items-center px-4 py-2 cursor-pointer hover:bg-primary-200"
              >
                {item}
              </option>
            );
          })}
        </select>
      )}
    </label>
  );
};
{
  /* <select
  className="bg-primary-200 h-10 pt-2 -mt-2 border-2 appearance-none outline-none text-primary-700 border-primary-700"
  name={name}
  {...props}
>
  {options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ))}
</select> */
}

export default Input;
