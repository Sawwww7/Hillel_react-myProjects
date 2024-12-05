import "./button.css";
const Button = ({ children, className, onClick, aria_label }) => {
  return (
    <button className={className} onClick={onClick} aria-label={aria_label}>
      {children}
    </button>
  );
};

export default Button;
