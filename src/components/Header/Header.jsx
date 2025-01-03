import { useContext, useState } from "react";
import "./header.css";
import Input from "../UI/Input/Input";
import { Link } from "react-router-dom";
import { NameContext } from "../../context/NameContext";
import { ThemeContext } from "../../context/ThemeContext";
//import { CartContext } from "../../context/CartContext";

const Header = () => {
  const { userName } = useContext(NameContext);
  const { theme, onToggle } = useContext(ThemeContext);
  const [yourSearchValue, setYourSearchValue] = useState("");
  //const { state } = useContext(CartContext);

  return (
    <div className="header">
      <div className="logo">
        <Link className="logo_heder_link" to="/">
          PIZZA DAY
        </Link>
      </div>
      <Input
        type={"text"}
        className={"search-bar"}
        placeholder={"Search for the order #"}
        aria_label={"Search for the order"}
        value={yourSearchValue}
        setInputValue={setYourSearchValue}
      />
      {/*<div className="links">
        <Link className={"heder_link"} to="/menu">
          Menu
        </Link>
        <Link className={"heder_link"} to="/basket">
          Basket
        </Link>
        <Link className={"heder_link"} to="/order">
          Order information
        </Link>
        <Link
          className={"heder_link"}
          to={userName ? `/order/${userName}` : "*"}
        >
          Order status
        </Link>
      </div>
      <div></div>*/}
      <div className="username">{userName}</div>
      {/*<div className="username">{state.resObject.data.customer}</div>*/}
      <button className="toggle_theme" onClick={onToggle}>
        Toggle theme: {theme}
      </button>
    </div>
  );
};

export default Header;
