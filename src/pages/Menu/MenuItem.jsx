import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "../../components/UI/Button/Button";
import CounterDispatchAction from "../../components/Counter/CounterDispatchAction";

const MenuItem = ({ pizza }) => {
  const { id, name, unitPrice, imageUrl, ingredients, soldOut } = pizza;

  const { state, onAdd /*, onIncrementPriceQuantity*/ } =
    useContext(CartContext);

  const item = state.cartItems.find((item) => item.id === id);

  return (
    <div className="pizza-item">
      <img src={imageUrl} alt={`${name} Pizza`} className="pizza-image" />
      <div className="pizza-info">
        <h2>{name}</h2>
        {ingredients.length > 0 && (
          <ul className="ingredients">
            {ingredients.slice(0, -1).map((ingredient, index) => (
              <li key={`${id}_${ingredients[index]}`} className="ingredient">
                {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)},
              </li>
            ))}
            <li key={`${id}_${ingredients[ingredients.length - 1]}`}>
              {ingredients[ingredients.length - 1].charAt(0).toUpperCase() +
                ingredients[ingredients.length - 1].slice(1)}
            </li>
          </ul>
        )}
        {!soldOut ? <p className="price">€{unitPrice}.00</p> : <div></div>}
      </div>
      {soldOut ? (
        <p className="sold-out">SOLD OUT</p>
      ) : (
        <>
          {!item ? (
            <Button
              className={"add-to-cart"}
              onClick={() => {
                onAdd(
                  pizza,
                  unitPrice
                ) /*, onIncrementPriceQuantity(unitPrice)*/;
              }}
            >
              ADD TO CART
            </Button>
          ) : (
            <div>
              <CounterDispatchAction id={id} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MenuItem;
