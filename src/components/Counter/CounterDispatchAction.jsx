import { useContext } from "react";
import Button from "../UI/Button/Button";
import "./counter.css";
import { CartContext } from "../../context/CartContext";

const CounterDispatchAction = ({ quantity, /* setCount */ id }) => {
  const { cartItems, dispatch } = useContext(CartContext);
  let quantityy = cartItems.map((cart) => cart.id === id);
  const handleClickDecrementButton = () => {
    dispatch({
      type: "DECREMENT_CART",
      payload: Number(id),
    });
  };
  const handleClickIncrementButton = () => {
    dispatch({
      type: "INCREMENT_CART",
      payload: Number(id),
    });
  };
  return (
    <div className="counter">
      {quantity > 0 && (
        <Button
          className={"counter_button"}
          onClick={handleClickDecrementButton}
          aria_label={"Decrease quantity"}
        >
          -
        </Button>
      )}
      <span> {quantity} </span>

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

export default CounterDispatchAction;
