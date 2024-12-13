import "./PageOrderForm.css";
import { useContext, useState } from "react";
import { NameContext } from "../../context/NameContext";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

const PageOrderForm = () => {
  const { userName } = useContext(NameContext);
  const [yourPhoneNumber, setYourPhoneNumber] = useState("");
  const [yourAddress, setYourAddress] = useState("");

  return (
    <div className="body_page_order">
      <div className="container_page_order">
        <h1>Ready to order? Let's go!</h1>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Input
              type={"text"}
              className={"input_page_order"}
              aria_label={"First Name"}
              value={userName}
              id={"firstName"}
              readonly={"readonly"}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <Input
              type={"tel"}
              className={"input_page_order"}
              aria_label={"phone"}
              value={yourPhoneNumber}
              setInputValue={setYourPhoneNumber}
              id={"phone"}
              required={"required"}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <div className="input-wrapper">
              <Input
                type={"text"}
                className={"input_page_order"}
                aria_label={"address"}
                value={yourAddress}
                setInputValue={setYourAddress}
                id={"address"}
                required={"required "}
              />
            </div>
          </div>

          <div className="checkbox-group">
            <div className="checkbox-wrapper">
              <input type="checkbox" id="priority" />
              <label htmlFor="priority">
                Want to give your order priority?
              </label>
            </div>
          </div>

          <Button className={"order-btn"} type={"submit"}>
            Order now for €12.00
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PageOrderForm;
