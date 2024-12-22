import { memo } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const PriceBreakdown = () => {
  const { state } = useContext(CartContext);

  const { orderPrice, priorityPrice } = state.resObject.data;

  return (
    <div className="price-breakdown">
      <div className="price-item">
        <span className="price-label">Price pizza:</span>
        <span className="price-value">{`€  ${orderPrice}.00`}</span>
      </div>

      {priorityPrice > 0 && (
        <div className="price-item">
          <span className="price-label">Price priority:</span>
          <span className="price-value">{`€  ${priorityPrice}.00`}</span>
        </div>
      )}

      <div className="price-item">
        <span className="price-label">To pay on delivery:</span>
        <span className="price-value">{`€ ${
          orderPrice + priorityPrice
        }.00`}</span>
      </div>
    </div>
  );
};

export default memo(PriceBreakdown);
