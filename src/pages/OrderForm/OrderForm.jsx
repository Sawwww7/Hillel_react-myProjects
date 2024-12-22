import "./orderForm.css";
import { useContext } from "react";
import { NameContext } from "../../context/NameContext";
import { CartContext } from "../../context/CartContext";
import Button from "../../components/UI/Button/Button";
import InputForm from "../../components/UI/Input/InputForm";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  first_name: z.string().min(3),
  phone_number: z
    .string()
    .min(7, { message: "Ви ввели замало символів" })
    .refine((val) => !Number.isNaN(parseInt(val, 10)), {
      message: "Expected number, received a string",
    }),
  address: z.string().min(5, { message: "Ви ввели замало символів" }),
  checkbox: z.boolean({ message: "Поле повиинно бути заповнено" }),
});

const OrderForm = () => {
  const { userName } = useContext(NameContext);
  const { onAddData, state, onAddResObject } = useContext(CartContext);

  const navigate = useNavigate();
  const stateeNavigate = () => {
    return state.resObject.status === "success"
      ? `/order/${"ANDRII"}`
      : `/order/${"/wrong"}`;
  };

  const cart = state.cartItems.map((item) => {
    return {
      name: item.name,
      pizzaId: item.id,
      quantity: item.qty,
      totalPrice: item.qty * item.unitPrice,
      unitPrice: item.unitPrice,
    };
  });

  const orderPizzas = async (data) => {
    const body = {
      customer: data.first_name,
      address: data.address,
      phone: data.phone_number,
      priority: data.checkbox,
      position: "",
      cart: cart,
    };

    const res = await fetch(
      "https://react-fast-pizza-api.onrender.com/api/order",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const resObject = await res.json();
    onAddResObject(resObject), navigate(`/order/${stateeNavigate}`);
  };

  const form = useForm({
    mode: "onBlur",
    defaultValues: {
      first_name: userName,
      phone_number: 38,
      address: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    onAddData(data),
      console.log("Submit form", data),
      orderPizzas(data),
      form.reset();
  };

  return (
    <div className="body_page_order">
      <div className="container_page_order">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <InputForm
                name="first_name"
                control={form.control}
                type={"text"}
                className={"input_page_order"}
                aria_label={"First Name"}
                id={"firstName"}
                readonly={"readonly"}
              />
              {form.formState.errors.first_name && (
                <p>{form.formState.errors.first_name.message}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <InputForm
                name="phone_number"
                control={form.control}
                type={"tel"}
                className={"input_page_order"}
                aria_label={"phone_number"}
                id={"phone"}
                required={"required"}
              />

              {form.formState.errors.phone_number && (
                <p>{form.formState.errors.phone_number.message}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <div className="input-wrapper">
                <InputForm
                  name="address"
                  control={form.control}
                  type={"text"}
                  className={"input_page_order"}
                  aria_label={"address"}
                  id={"address"}
                  required={"required "}
                />

                {form.formState.errors.address && (
                  <p>{form.formState.errors.address.message}</p>
                )}
              </div>
            </div>

            <div className="checkbox-group">
              <div className="checkbox-wrapper">
                <InputForm
                  name="checkbox"
                  control={form.control}
                  type={"checkbox"}
                  id="priority"
                />
                {form.formState.errors.checkbox && (
                  <p>{form.formState.errors.checkbox.message}</p>
                )}

                <label htmlFor="priority">
                  Want to give your order priority?
                </label>
              </div>
            </div>
            <Button
              disabled={!form.formState.isValid}
              className={"order-btn"}
              type={"submit"}
            >
              {`Order now for  € ${state.totalPrice}.00`}
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default OrderForm;
