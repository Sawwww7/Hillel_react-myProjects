import Counter from "../../components/Counter/Counter";
import Button from "../../components/UI/Button/Button";
import { useState } from "react";

const CartItem = ({ item }) => {
  const { name, price, quantity } = item;
  const [count, setCount] = useState(quantity || 0);

  const handleDeleteItem = () => {
    setCount(0);
  };

  return (
    <>
      <span className="quantity-text">{count}x</span>
      <span>{name}</span>
      <span className="price">€ {price * count}.00</span>
      <div className="quantity-controls">
        <Counter count={count} setCount={setCount} />

        <Button
          className={"delete-btn"}
          onClick={handleDeleteItem}
          aria_label={"Delete item"}
        >
          DELETE
        </Button>
      </div>
    </>
  );
};

export default CartItem;
