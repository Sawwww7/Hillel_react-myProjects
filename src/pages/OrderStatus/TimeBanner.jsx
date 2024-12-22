import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const TimeBanner = () => {
  const { state } = useContext(CartContext);

  return (
    <div className="time-banner">
      <div className="time-left" id="minutes">
        Only 49 minutes left 😃
      </div>
      <div className="estimated-time">
        (Estimated delivery: {state.resObject.data.estimatedDelivery})
      </div>
    </div>
  );
};

export default TimeBanner;
