import { memo } from "react";

const PriceBreakdown = () => {
  return (
    <div className="price-breakdown">
      <div className="price-item">
        <span className="price-label">Price pizza:</span>
        <span className="price-value">€12.00</span>
      </div>
      <div className="price-item">
        <span className="price-label">Price priority:</span>
        <span className="price-value">€2.00</span>
      </div>
      <div className="price-item">
        <span className="price-label">To pay on delivery:</span>
        <span className="price-value">€14.00</span>
      </div>
    </div>
  );
};

export default memo(PriceBreakdown);
