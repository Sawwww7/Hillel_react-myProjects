import { createContext, useCallback, useMemo, useReducer } from "react";

export const CartContext = createContext(null);
CartContext.displayName = "CartContext";

function CartContextProvider({ children }) {
  const initialState = {
    totalQuantity: 0,
    totalPrice: 0,
    items: [],
    isLoading: false,
    currentItem: null,
    cartItems: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INIT":
        return {
          ...state,
          items: action.payload,
        };

      case "ADD_TO_CART": {
        const item = state.cartItems.find(
          (item) => item.id === action.payload.id
        );

        if (item) {
          return {
            ...state,
            cartItems: state.cartItems.map((i) => {
              if (i.id !== action.payload.id) return i;
              return { ...i, qty: i.qty + 1 };
            }),
          };
        }

        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
        };
      }

      case "INCREMENT_CART":
        return {
          ...state,
          cartItems: state.cartItems.map((i) => {
            if (i.id !== action.payload) return i;
            return { ...i, qty: i.qty + 1 };
          }),
        };

      case "DECREMENT_CART":
        return {
          ...state,
          cartItems: state.cartItems.map((i) => {
            if (i.id !== action.payload) return i;
            return { ...i, qty: i.qty - 1 };
          }),
        };

      case "DELETE_CART":
        return {
          ...state,
          cartItems: state.cartItems.filter((i) => {
            return i.id !== action.payload;
          }),
        };

      case "INCREMENT_TOTAL_PRICE_QUANTITY":
        return {
          ...state,
          totalQuantity: state.totalQuantity + 1,
          totalPrice: state.totalPrice + action.payload,
        };

      case "DECREMENT_TOTAL_PRICE_QUANTITY":
        return {
          ...state,
          totalQuantity: state.totalQuantity - 1,
          totalPrice: state.totalPrice - action.payload,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInitData = useCallback((items) => {
    dispatch({
      type: "INIT",
      payload: items,
    });
  }, []);

  const handleAddToCart = useCallback((pizza) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: pizza,
    });
  }, []);

  const handleClickIncrement = useCallback((id) => {
    dispatch({
      type: "INCREMENT_CART",
      payload: Number(id),
    });
  }, []);

  const handleClickDecrement = useCallback((id) => {
    dispatch({
      type: "DECREMENT_CART",
      payload: Number(id),
    });
  }, []);

  const handleDeleteItem = useCallback((id) => {
    dispatch({
      type: "DELETE_CART",
      payload: Number(id),
    });
  }, []);

  const handleIncrementTotalPriceQuantity = useCallback((unitPrice) => {
    dispatch({
      type: "INCREMENT_TOTAL_PRICE_QUANTITY",
      payload: Number(unitPrice),
    });
  }, []);

  const handleDecrementTotalPriceQuantity = useCallback((unitPrice_qty) => {
    dispatch({
      type: "DECREMENT_TOTAL_PRICE_QUANTITY",
      payload: Number(unitPrice_qty),
    });
  }, []);

  const austCart = useMemo(
    () => ({
      onInit: handleInitData,
      onAdd: handleAddToCart,
      onIncrement: handleClickIncrement,
      onDecrement: handleClickDecrement,
      onDelete: handleDeleteItem,
      onIncrementPriceQuantity: handleIncrementTotalPriceQuantity,
      onDecrementPriceQuantity: handleDecrementTotalPriceQuantity,
      state,
    }),
    [
      handleInitData,
      handleAddToCart,
      handleClickIncrement,
      handleClickDecrement,
      handleDeleteItem,
      handleIncrementTotalPriceQuantity,
      handleDecrementTotalPriceQuantity,
      state,
    ]
  );
  return (
    <CartContext.Provider value={austCart}>{children}</CartContext.Provider>
  );
}

export default CartContextProvider;
