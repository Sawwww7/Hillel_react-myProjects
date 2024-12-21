import Button from "../../components/UI/Button/Button";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CounterDispatchAction from "../../components/Counter/CounterDispatchAction";

const CartItem = ({ item }) => {
  const { id, name, unitPrice, qty } = item;

  const { onDelete, onDecrementPriceQuantity } = useContext(CartContext);

  return (
    <>
      <span className="quantity-text">{item.qty}x</span>
      <span>{name}</span>
      <span className="price">€ {unitPrice * qty}.00</span>
      <div className="quantity-controls">
        <CounterDispatchAction id={id} />

        <Button
          className={"delete-btn"}
          onClick={() => {
            onDelete(id),
              onDecrementPriceQuantity(unitPrice * qty /*item.unitPrice*/);
          }}
          aria_label={"Delete item"}
        >
          DELETE
        </Button>
      </div>
    </>
  );
};

export default CartItem;
