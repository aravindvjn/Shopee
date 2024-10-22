import React, { useContext, useState } from "react";
import Header from "../../ProductDetails/Header";
import Input from "../../Auth/Input";
import { UserContext } from "../../../Global/UserContext";
import { authURL } from "../../../Global/Links";

const AddAddress = () => {
  const { user, setNotification } = useContext(UserContext);
  const [input, setInput] = useState({
    name: "",
    phone_number: "",
    street: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    instructions: "",
  });
  const onChangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const token = localStorage.getItem("token");
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!user) {
      return;
    } else if (
      !input.city ||
      !input.country ||
      !input.name ||
      !input.phone_number ||
      !input.postal_code ||
      !input.state ||
      !input.street
    ) {
      setNotification("You have fill everything.");
    } else {
      try {
        const response = await fetch(authURL + "addresses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: input.name,
            phone_number: input.phone_number,
            street: input.street,
            city: input.city,
            state: input.state,
            postal_code: input.postal_code,
            country: input.country,
            instructions: input.instructions,
          }),
        });
        const data = await response.json();
        setNotification(data.message);
      } catch (err) {
        setNotification("Something is Wrong.Please Try again.");
      }
    }
  };
  return (
    <div className="bg-pink-50 min-h-screen p-5 sm:p-10 pt-16 pb-24 mb-5 ">
      <Header text={"Add Address"} />
      <form onSubmit={submitHandler} className="flex flex-col sm:w-2/3 lg:w-1/3 sm:py-8 lg:py-16">
        <Input
          type="text"
          placeholder="Full Name"
          name="name"
          onChangeHandler={onChangeHandler}
          input={input}
        />
        <Input
          type="text"
          placeholder="House Number / House Name"
          name="street"
          onChangeHandler={onChangeHandler}
          input={input}
        />
        <Input
          type="text"
          placeholder="City"
          name="city"
          onChangeHandler={onChangeHandler}
          input={input}
        />
        <Input
          type="text"
          placeholder="State"
          name="state"
          onChangeHandler={onChangeHandler}
          input={input}
        />
        <Input
          type="text"
          placeholder="Country"
          name="country"
          onChangeHandler={onChangeHandler}
          input={input}
        />
        <Input
          type="text"
          placeholder="Postal Code"
          name="postal_code"
          onChangeHandler={onChangeHandler}
          input={input}
        />
        <Input
          type="text"
          placeholder="Delivery Instructions"
          name="instructions"
          onChangeHandler={onChangeHandler}
          input={input}
        />
        <Input
          type="number"
          placeholder="Phone Number"
          name="phone_number"
          onChangeHandler={onChangeHandler}
          input={input}
        />
        <button className="uppercase rounded-lg bg-pink-700 text-white p-2 hover:bg-pink-300 border">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddAddress;
