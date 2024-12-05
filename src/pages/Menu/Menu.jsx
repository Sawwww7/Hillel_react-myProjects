import "./menu.css";
import MenuItem from "./MenuItem";
import { useEffect, useState } from "react";

const Menu = () => {
  const [pizzas, setPizzas] = useState([]);

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
        setPizzas(data.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getMenuPizzas();
  }, []);

  return (
    <>
      <div className="menu-container">
        {pizzas.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </>
  );
};

export default Menu;
