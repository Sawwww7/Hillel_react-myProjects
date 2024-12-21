import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const { state } = useContext(CartContext);

  return (
    <div className="footer">
      <div className={"total"}>
        <div className="quantity">
          {state.totalQuantity}
          {/*state.cartItems.map((item) => {
            return quantity + item.qty;
          })*/}
        </div>
        <div>Pizzas</div>
        <div className="totalPrice">
          €{state.totalPrice}
          {/*state.cartItems.map((item) => {
            return totalPrice + item.unitPrice * item.qty;
          })*/}
        </div>
      </div>
      <Link className={"footer_link"} to="/basket">
        Open cart →
      </Link>
    </div>
  );
};

export default Footer;
