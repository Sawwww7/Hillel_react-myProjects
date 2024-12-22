import { useContext } from "react";
import Button from "../UI/Button/Button";
import "./counter.css";
import { CartContext } from "../../context/CartContext";

const CounterDispatchAction = ({ id }) => {
  const {
    state,
    onIncrement,
    onDecrement,
    //onIncrementPriceQuantity,
    //onDecrementPriceQuantity,
  } = useContext(CartContext);

  const item = state.cartItems.find((item) => item.id === id);

  return (
    <div className="counter">
      {item.qty > 0 && (
        <Button
          className={"counter_button"}
          onClick={() => {
            onDecrement(id, item.unitPrice);
            //onDecrementPriceQuantity(item.unitPrice);
          }}
          aria_label={"Decrease quantity"}
        >
          -
        </Button>
      )}
      <span> {item.qty} </span>

      <Button
        className={"counter_button"}
        onClick={() => {
          onIncrement(id, item.unitPrice);
          //onIncrementPriceQuantity(item.unitPrice);
        }}
        aria_label={"Increase quantity"}
      >
        +
      </Button>
    </div>
  );
};

export default CounterDispatchAction;
