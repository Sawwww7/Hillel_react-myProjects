import "./menu.css";
import MenuItem from "./MenuItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useEffect } from "react";

const Menu = () => {
  const { state, onInit } = useContext(CartContext);

  useEffect(() => {
    const getMenuPizzas = async () => {
      try {
        const res = await fetch(
          "https://react-fast-pizza-api.onrender.com/api/menu"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        onInit(data.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getMenuPizzas();
  }, [onInit]);

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
