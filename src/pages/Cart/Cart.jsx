import { useContext } from "react";
import CartItem from "./CartItem";
import Button from "../../components/UI/Button/Button";
import { NameContext } from "../../context/NameContext";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { userName } = useContext(NameContext);
  const { state } = useContext(CartContext);
  const navigate = useNavigate();

  const order = () => {
    navigate(`/order`);
  };

  return (
    <div className="cart-container">
      <Link className="back-link" to="/menu">
        ← Back to menu
      </Link>
      <h1 className="cart-title">{`Your cart, ${userName}`}</h1>

      <div className="cart-item">
        {state.cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>

      <div className="cart-actions">
        <Button
          className={"order-btn"}
          onClick={order}
          aria_label={"Order pizzas"}
        >
          Order pizzas
        </Button>
        <Button
          className={"clear-btn"} //onClick={}
          aria_label={"Clear cart"}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
