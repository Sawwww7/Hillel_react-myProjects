import { useContext } from "react";
import CartItem from "./CartItem";
import Button from "../../components/UI/Button/Button";
import { NameContext } from "../../context/NameContext";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { userName } = useContext(NameContext);
  const { state /*onAddResObject*/ } = useContext(CartContext);
  const navigate = useNavigate();

  const order = () => {
    navigate(`/order`);
  };
  /*const { customer, address, phone, priority } = state;

  const navigate = useNavigate();
  const stateeNavigate = () => {
    state.resObject.status === "success"
      ? `/order/${"ANDRII"}`
      : `/order/${"/wrong"}`;
  };

  const cart = state.cartItems.map((item) => {
    return {
      name: item.name,
      pizzaId: item.id,
      quantity: item.qty,
      totalPrice: item.qty * item.unitPrice,
      unitPrice: item.unitPrice,
    };
  });

  const orderPizzas = async () => {
    /*const body = {
      customer: "Andrii",
      address: "Kharkiv",
      phone: "+38 (000)000-0000",
      priority: false,
      position: "",
      cart: cart,
    };*/ /*

    const body = {
      customer: customer,
      address: address,
      phone: phone,
      priority: priority,
      position: "",
      cart: cart,
    };

    const res = await fetch(
      "https://react-fast-pizza-api.onrender.com/api/order",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const resObject = await res.json();
    onAddResObject(resObject), navigate(`/order/${stateeNavigate}`);
  };*/

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
