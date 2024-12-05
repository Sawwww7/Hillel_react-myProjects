import Button from "../UI/Button/Button";
import "./counter.css";

const Counter = ({ count, setCount }) => {
  const handleClickDecrementButton = () => {
    setCount(count - 1);
  };
  const handleClickIncrementButton = () => {
    setCount(count + 1);
  };
  return (
    <div className="counter">
      {count > 0 && (
        <Button
          className={"counter_button"}
          onClick={handleClickDecrementButton}
          aria_label={"Decrease quantity"}
        >
          -
        </Button>
      )}
      <span> {count} </span>

      <Button
        className={"counter_button"}
        onClick={handleClickIncrementButton}
        aria_label={"Increase quantity"}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
