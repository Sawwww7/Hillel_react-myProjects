import { useContext, useState } from "react";
import "./header.css";
import Input from "../UI/Input/Input";
import { Link } from "react-router-dom";
import { NameContext } from "../../context/NameContext";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const { userName } = useContext(NameContext);
  const { theme, onToggle } = useContext(ThemeContext);
  const [yourSearchValue, setYourSearchValue] = useState("");

  return (
    <div className="header">
      <div className="logo">PIZZA DAY</div>
      <Input
        type={"text"}
        className={"search-bar"}
        placeholder={"Search for the order #"}
        aria_label={"Search for the order"}
        value={yourSearchValue}
        setInputValue={setYourSearchValue}
      />
      <div>
        <Link className={"heder_link"} to="/menu">
          Menu
        </Link>
        <Link className={"heder_link"} to="/basket">
          Basket
        </Link>
      </div>
      <div>
        <button className="toggle_theme" onClick={onToggle}>
          Toggle theme: {theme}
        </button>
      </div>
      <div className="username">{userName}</div>
    </div>
  );
};

export default Header;
