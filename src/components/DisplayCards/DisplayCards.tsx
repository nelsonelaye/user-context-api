import React, { useContext } from "react";
import "./index.module.scss";
import Button from "../Button";
import { AppContext } from "../../App";

const DisplayCards = () => {
  const ctx = useContext(AppContext);

  const handle_delete = (id?: number) => {
    if (id !== undefined) {
      ctx?.remove_user(id);
    } else {
      return;
    }
  };

  return (
    <section>
      <h2>Available users</h2>

      <ul>
        {ctx?.users?.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <span style={{ fontSize: "20px" }}>
              <b>{user.age}</b>
            </span>
            <span>{user.bio}</span>
            <Button
              text="Delete user"
              onClick={() => {
                handle_delete(user.id);
              }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DisplayCards;
