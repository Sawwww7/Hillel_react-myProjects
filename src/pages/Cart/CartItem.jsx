//import Counter from "../../components/Counter/Counter";
import Button from "../../components/UI/Button/Button";
import { useContext /* useState */ } from "react";
import { CartContext } from "../../context/CartContext";
import CounterDispatchAction from "../../components/Counter/CounterDispatchAction";

const CartItem = ({ item }) => {
  const { id, name, price, quantity } = item;
  //const [count, setCount] = useState(quantity || 0);
  const { cartItems, dispatch } = useContext(CartContext);
  console.log(cartItems);

  const handleDeleteItem = () => {
    dispatch({
      type: "DELETE_CART",
      payload: Number(id),
    });
    //setCount(0);
  };

  return (
    <>
      <span className="quantity-text">{quantity}x</span>
      <span>{name}</span>
      <span className="price">€ {price * quantity}.00</span>
      <div className="quantity-controls">
        <CounterDispatchAction
          quantity={quantity}
          /*setCount={setCount}*/ id={id}
        />

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
