function OrderDetailsItems({ item }) {
  const { name, quantity, unitPrice, addIngredients } = item;
  return (
    <div className="pizza-itemStatus">
      <div className="pizza-header">
        <span className="pizza-name">
          {quantity} x {name}
        </span>
        <span className="pizza-price">€ {unitPrice}.00</span>
      </div>
      <div className="ingredients">{addIngredients}</div>
    </div>
  );
}

export default OrderDetailsItems;
