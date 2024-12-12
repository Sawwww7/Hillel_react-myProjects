import "./button.css";
const Button = ({ children, className, onClick, aria_label, type }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      aria-label={aria_label}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
