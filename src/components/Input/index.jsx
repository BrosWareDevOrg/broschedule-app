'use client';
import { useRef } from 'react';
const Input = ({
  type = 'text',
  label = 'Input Label',
  placeholder = 'Input placeholder',
  name = 'input',
  options = ['option 1', 'option 2', 'option 3'],
  color = 'primary',
  ...props
}) => {
  const selectRef = useRef(<select></select>);
  const inputRef = useRef(<input />);
  const listContainerRef = useRef(<dl></dl>);

  const handleSelectorShowOptions = (event) => {
    const selectValue = event.target.attributes.value.value;

    selectRef.current.attributes.value.value = selectValue;
    inputRef.current.attributes.value.value = selectValue;
    selectRef.current.innerHTML = selectValue;
  };

  return (
    <>
      {type !== 'select' ? (
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor={name}
            aria-label={name}
            className="text-primary-700 font-bold text-md md:text-lg block w-full px-2 py-1 md:px-4 cursor-pointer"
          >
            {label}
          </label>
          <input
            className={`bg-${color}-200 appearance-none text-${color}-700 text-xl font-medium outline-none border-2 border-${color}-700 rounded-2xl placeholder:text-${color}-700 h-10 px-3 md:px-4`}
            type={type}
            id={name}
            name={name}
            {...props}
          />
        </div>
      ) : (
        <div
          className={`flex flex-col gap-1 w-full h-fit transition-all bg-${color}-200 rounded-2xl`}
        >
          <input
            name="hiddenCheckbox"
            id={name}
            type="checkbox"
            className="peer hidden"
          />
          <input
            name={name}
            defaultValue={placeholder}
            ref={inputRef}
            type="text"
            className="hidden"
          />
          <label
            htmlFor={name}
            ref={selectRef}
            value={placeholder}
            onClick={(e) => handleSelectorShowOptions(e)}
            className={`px-4 py-2 rounded-2xl bg-${color}-200 border-2 outline-none text-${color}-700 text-lg border-${color}-700 cursor-pointer`}
            {...props}
          >
            {placeholder}
          </label>
          <dl
            ref={listContainerRef}
            className="w-full h-0 hidden flex-col gap-1 transition-all peer-checked:flex peer-checked:h-full"
          >
            {options.map((item, index) => {
              return (
                <label
                  key={index}
                  htmlFor={name}
                  value={item}
                  onClick={(e) => handleSelectorShowOptions(e)}
                  className={`flex gap-2 items-center px-4 py-2 text-${color}-700 text-lg cursor-pointer hover:bg-${color}-200 rounded-2xl`}
                  {...props}
                >
                  <span
                    className={`w-2 h-2 bg-${color}-700 rounded-full`}
                  ></span>
                  {item}
                </label>
              );
            })}
          </dl>
        </div>
      )}
    </>
  );
};

export default Input;
