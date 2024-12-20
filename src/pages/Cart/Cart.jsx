import { useContext } from "react";
import CartItem from "./CartItem";
import Button from "../../components/UI/Button/Button";
import { NameContext } from "../../context/NameContext";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = (/*{ cartItems }*/) => {
  const { userName } = useContext(NameContext);
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-container">
      <Link className="back-link" to="/menu">
        ← Back to menu
      </Link>
      <h1 className="cart-title">{`Your cart, ${userName}`}</h1>

      <div className="cart-item">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-actions">
        <Button
          className={"order-btn"}
          // onClick={}
          aria_label={"Order pizzas"}
        >
          Order pizzas
        </Button>
        <Button
          className={"clear-btn"}
          // onClick={}
          aria_label={"Clear cart"}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
