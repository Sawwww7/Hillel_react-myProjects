import { createContext, useReducer } from "react";

export const CartContext = createContext(null);
CartContext.displayName = "NameContext";

function CartContextProvider({ children }) {
  const reducer = (cartItems, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return (cartItems = [...cartItems, action.items]);
      case "DELETE_CART":
        return (cartItems = cartItems.filter(
          (cart) => cart.id != action.payload
        ));

      case "INCREMENT_CART":
        return (cartItems = cartItems.map((cartt) =>
          cartt.id === action.payload
            ? { ...cartt, quantity: cartt.quantity + 1 }
            : cartt
        ));

      case "DECREMENT_CART":
        return (cartItems = cartItems.map((cartt) =>
          cartt.id === action.payload
            ? { ...cartt, quantity: cartt.quantity - 1 }
            : cartt
        ));
      default:
        return cartItems;
    }
  };

  const [cartItems, dispatch] = useReducer(reducer, []);
  console.log(cartItems);
  const austCart = {
    cartItems,
    dispatch,
  };
  return (
    <CartContext.Provider value={austCart}>{children}</CartContext.Provider>
  );
}

export default CartContextProvider;
