import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const HeaderOrderStatus = () => {
  const { state } = useContext(CartContext);
  const { id, priority, status } = state.resObject.data;

  return (
    <div className="header_order_status">
      <h1 className="order-title">
        Order #{id} status: {status}
      </h1>
      <div className="badges">
        {priority && <span className="badge badge-priority">PRIORITY</span>}
        <span className="badge badge-preparing">PREPARING ORDER</span>
      </div>
    </div>
  );
};

export default HeaderOrderStatus;
