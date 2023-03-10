import "./index.module.scss";
import Button from "../Button";
import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { userType } from "../../App.types";

const InputForm = () => {
  const ctx = useContext(AppContext);
  const [user, setUser] = useState<userType>({
    name: "",
    age: 0,
    bio: "",
  });

  const handle_add_user = (user: userType) => {
    console.log(user);
    ctx?.add_user(user);
  };
  return (
    <section>
      <h2 style={{ textAlign: "center" }}>Add New User</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handle_add_user(user);
        }}
      >
        <input
          type="text"
          placeholder="Name"
          onChange={({ target }) => {
            setUser({ ...user, name: target.value });
          }}
          required
        />
        <input
          type="text"
          placeholder="Age"
          onChange={({ target }) => {
            setUser({ ...user, age: parseInt(target.value) });
          }}
          required
        />
        <textarea
          placeholder="Bio"
          onChange={({ target }) => {
            setUser({ ...user, bio: target.value });
          }}
          required
        />
        <Button text="create new user" />
      </form>
    </section>
  );
};

export default InputForm;
