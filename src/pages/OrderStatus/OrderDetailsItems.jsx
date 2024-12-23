import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function OrderDetailsItems({ item }) {
  const { pizzaId, name, quantity, unitPrice } = item;
  const { state } = useContext(CartContext);
  const pizza = state.items.find((pizza) => pizza.id === pizzaId);
  const { id, ingredients } = pizza;

  return (
    <div className="pizza-itemStatus">
      <div className="pizza-header">
        <span className="pizza-name">
          {quantity} x {name}
        </span>
        <span className="pizza-price">€ {unitPrice}.00</span>
      </div>

      {ingredients.length > 0 && (
        <ul className="ingredients">
          {ingredients.slice(0, -1).map((ingredient, index) => (
            <li key={`${id}_${ingredients[index]}`}>
              {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)},
            </li>
          ))}
          <li key={`${id}_${ingredients[ingredients.length - 1]}`}>
            {ingredients[ingredients.length - 1].charAt(0).toUpperCase() +
              ingredients[ingredients.length - 1].slice(1)}
          </li>
        </ul>
      )}
    </div>
  );
}

export default OrderDetailsItems;
