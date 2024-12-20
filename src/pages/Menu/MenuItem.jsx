import { /*useReducer,*/ useContext, useState } from "react";
import Button from "../../components/UI/Button/Button";
import Counter from "../../components/Counter/Counter";
import { CartContext } from "../../context/CartContext";
import CounterDispatchAction from "../../components/Counter/CounterDispatchAction";

const MenuItem = ({ pizza }) => {
  const { id, name, unitPrice, imageUrl, ingredients, soldOut } = pizza;
  const [count, setCount] = useState(0);
  const { cartItems, dispatch } = useContext(CartContext);

  const quantityy = 0;
  let countt = cartItems.filter((cartt) => cartt.id === id);

  console.log(countt);

  const handleClickButton = () => {
    dispatch({
      type: "ADD_TO_CART",
      items: {
        id: id,
        name: name,
        price: unitPrice,
        quantity: 1,
      },
    });
    //console.log(countt);
    setCount(1);
  };
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
          {count <= 0 ? (
            <Button className={"add-to-cart"} onClick={handleClickButton}>
              ADD TO CART
            </Button>
          ) : (
            <div>
              <CounterDispatchAction
                quantity={quantityy}
                /*quantity={quantity} */ id={id}
              />

              <Counter count={count} setCount={setCount} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MenuItem;
