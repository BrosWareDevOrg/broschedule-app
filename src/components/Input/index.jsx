const Input = ({ type, label, name, options = [], ...props }) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="text-primary-700 font-semibold">{label}</label>
            {type !== "select" ? (
                <input
                    className="bg-primary-200 appearance-none text-primary-700 outline-none border-2 border-primary-700 rounded-lg placeholder:text-primary-700 h-10 pl-3"
                    type={type}
                    id={name}
                    name={name}
                    {...props}
                />
            ) : (
                <select className="bg-primary-200 h-10 pt-2 -mt-2 border-2 appearance-none outline-none text-primary-700 border-primary-700" id={name} name={name} {...props}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default Input;