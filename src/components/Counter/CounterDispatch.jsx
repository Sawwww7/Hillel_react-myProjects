import Button from "../UI/Button/Button";
import "./counter.css";

const CounterDispatch = ({ count, dispatch }) => {
  const handleClickDecrementButton = () => {
    dispatch({ type: "DECREMENT", payload: 1 });
    //setCount(count - 1);
  };
  const handleClickIncrementButton = () => {
    dispatch({ type: "INCREMENT", payload: 1 });

    //setCount(count + 1);
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

export default CounterDispatch;
