import "./input.css";
import { useController } from "react-hook-form";

const InputForm = ({
  name,
  control,
  type,
  className,
  placeholder,
  aria_label,
  id,
  readonly,
  required,
}) => {
  const { field } = useController({ name, control });

  return (
    <input
      type={type}
      {...field}
      className={className}
      placeholder={placeholder}
      aria-label={aria_label}
      id={id}
      readOnly={readonly}
      required={required}
    />
  );
};

export default InputForm;
