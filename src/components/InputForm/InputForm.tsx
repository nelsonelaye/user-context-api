import "./index.module.scss";
import Button from "../Button";

const InputForm = () => {
  return (
    <section>
      <h2 style={{ textAlign: "center" }}>Add New User</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Age" />
        <textarea placeholder="Bio" />
        <Button text="create new user" />
      </form>
    </section>
  );
};

export default InputForm;
