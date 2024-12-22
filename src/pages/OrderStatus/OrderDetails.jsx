import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import OrderDetailsItems from "./OrderDetailsItems";

const OrderDetails = () => {
  const { state } = useContext(CartContext);

  return (
    <div className="order-details">
      {state.resObject.data.cart.map((item) => {
        return <OrderDetailsItems key={item.pizzaId} item={item} />;
      })}
    </div>
  );
};

export default OrderDetails;
