import "./menu.css";
import MenuItem from "./MenuItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

const Menu = () => {
  const { state, onInit } = useContext(CartContext);

  const { data, error, isLoading } = useFetch(
    "https://react-fast-pizza-api.onrender.com/api/menu"
  );
  useEffect(() => {
    onInit(data);
  }, [data]);

  return (
    <>
      <div className="menu-container">
        {state.items.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </>
  );
};

export default Menu;
