import "./input.css";
const Input = ({
  type,
  className,
  placeholder,
  aria_label,
  value,
  setInputValue,
}) => {
  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleClickInput = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      aria-label={aria_label}
      value={value}
      onChange={handleChangeInput}
      onClick={handleClickInput}
    />
  );
};

export default Input;
