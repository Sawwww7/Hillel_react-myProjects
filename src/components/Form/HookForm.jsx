import { useForm } from "react-hook-form";
import { useContext } from "react";
import { NameContext } from "../../context/NameContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  first_name: z.string().min(3),
  //phone_number: z.coerce.number().gte(5),
  phone_number: z
    .string()
    .min(7, { message: "Ви ввели замало символів" })
    .refine((val) => !Number.isNaN(parseInt(val, 10)), {
      message: "Expected number, received a string",
    }),
  address: z.string().min(5, { message: "Ви ввели замало символів" }),
});

const HookForm = () => {
  const { userName } = useContext(NameContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      first_name: userName,
      phone_number: 38,
      address: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Submit form", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          {...register("first_name")}
          className="input_page_order"
          type="text"
          readOnly
        />
        {errors.first_name && <p>{errors.first_name.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone number</label>
        <input
          {...register("phone_number" /*{ valueAsNumber: true }*/)}
          className="input_page_order"
          type="tel"
        />
        {errors.phone_number && <p>{errors.phone_number.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>
        <div className="input-wrapper">
          <input
            {...register("address")}
            className="input_page_order"
            type="text"
            required
          />
          {errors.address && <p>{errors.address.message}</p>}
        </div>
      </div>

      <div className="checkbox-group">
        <div className="checkbox-wrapper">
          <input {...register("checkbox")} type="checkbox" id="priority" />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>
      </div>

      <button disabled={!isValid} className={"order-btn"} type={"submit"}>
        Order now for €12.00
      </button>
    </form>
  );
};

export default HookForm;
