const HeaderOrderStatus = () => {
  return (
    <div className="header_order_status">
      <h1 className="order-title">Order #5T460L status: preparing</h1>
      <div className="badges">
        <span className="badge badge-priority">PRIORITY</span>
        <span className="badge badge-preparing">PREPARING ORDER</span>
      </div>
    </div>
  );
};

export default HeaderOrderStatus;
