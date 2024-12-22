import { createContext, useCallback, useMemo, useReducer } from "react";

export const CartContext = createContext(null);
CartContext.displayName = "CartContext";

function CartContextProvider({ children }) {
  const initialState = {
    customer: " ",
    address: " ",
    phone: " ",
    priority: null,
    // isLoading: false,
    // currentItem: null,
    totalQuantity: 0,
    totalPrice: 0,
    items: [],

    cartItems: [],
    resObject: {},
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

          totalQuantity: state.totalQuantity + 1,
          totalPrice: state.totalPrice + action.unitPrice,
        };
      }

      case "INCREMENT_CART":
        return {
          ...state,
          totalQuantity: state.totalQuantity + 1,
          totalPrice: state.totalPrice + action.unitPrice,
          cartItems: state.cartItems.map((i) => {
            if (i.id !== action.payload) return i;
            return { ...i, qty: i.qty + 1 };
          }),
        };

      case "DECREMENT_CART":
        return {
          ...state,
          totalQuantity: state.totalQuantity - 1,
          totalPrice: state.totalPrice - action.unitPrice,
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

      case "ADD_RES_OBJECT":
        return {
          ...state,
          resObject: action.payload,
        };

      case "ADD_DATA":
        return {
          ...state,
          customer: action.payload.first_name,
          address: action.payload.address,
          phone: action.payload.phone_number,
          priority: action.payload.checkbox,
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

  const handleAddToCart = useCallback((pizza, unitPrice) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: pizza,
      unitPrice: Number(unitPrice),
    });
  }, []);

  const handleClickIncrement = useCallback((id, unitPrice) => {
    dispatch({
      type: "INCREMENT_CART",
      payload: Number(id),
      unitPrice: Number(unitPrice),
    });
  }, []);

  const handleClickDecrement = useCallback((id, unitPrice) => {
    dispatch({
      type: "DECREMENT_CART",
      payload: Number(id),
      unitPrice: Number(unitPrice),
    });
  }, []);

  const handleDeleteItem = useCallback((id) => {
    dispatch({
      type: "DELETE_CART",
      payload: Number(id),
    });
  }, []);

  const handleAddResObject = useCallback((resObject) => {
    dispatch({
      type: "ADD_RES_OBJECT",
      payload: resObject,
    });
  }, []);

  const handleAddData = useCallback((data) => {
    dispatch({
      type: "ADD_DATA",
      payload: data,
    });
  }, []);

  const austCart = useMemo(
    () => ({
      onInit: handleInitData,
      onAdd: handleAddToCart,
      onIncrement: handleClickIncrement,
      onDecrement: handleClickDecrement,
      onDelete: handleDeleteItem,
      onAddResObject: handleAddResObject,
      onAddData: handleAddData,
      state,
    }),
    [
      handleInitData,
      handleAddToCart,
      handleClickIncrement,
      handleClickDecrement,
      handleDeleteItem,
      handleAddResObject,
      handleAddData,
      state,
    ]
  );
  return (
    <CartContext.Provider value={austCart}>{children}</CartContext.Provider>
  );
}

export default CartContextProvider;
