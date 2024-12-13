import "./orderStatus.css";
import HeaderOrderStatus from "./HeaderOrderStatus";
import TimeBanner from "./TimeBanner";
import OrderDetails from "./OrderDetails";
import PriceBreakdown from "./PriceBreakdown";

const OrderStatus = () => {
  return (
    <div className="body_page_orderStatus">
      <div className="container_page_orderstatus">
        <HeaderOrderStatus />
        <TimeBanner />
        <OrderDetails />
        <PriceBreakdown />
      </div>
    </div>
  );
};

export default OrderStatus;
