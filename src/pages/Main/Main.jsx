import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { NameContext } from "../../context/NameContext";

const Main = () => {
  const [yourFullName, setYourFullName] = useState("");
  const { setUserName } = useContext(NameContext);

  const navigate = useNavigate();
  const handleFormVisible = () => {
    yourFullName.trim() == ""
      ? alert("Enter you name")
      : yourFullName.length < 3
      ? alert("Please enter your name correctly")
      : (setUserName(yourFullName), navigate("/menu"));
  };
  return (
    <div className="main">
      <h1>The best pizza.</h1>
      <p className="subtitle">Straight out of the oven, straight to you.</p>
      <p className="welcome">
        👉 Welcome! Please start by telling us your name:
      </p>
      <Input
        type={"text"}
        className={"input"}
        placeholder={"Your full name"}
        aria_label={"Your full name"}
        value={yourFullName}
        setInputValue={setYourFullName}
      />
      <Button className={"btn"} onClick={handleFormVisible}>
        Start Order
      </Button>
    </div>
  );
};

export default Main;
