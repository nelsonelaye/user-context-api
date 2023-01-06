import "./index.module.scss";
import Button from "../Button";
const DisplayCards = () => {
  const users = [
    { name: "nelson", age: 12, bio: "Nonnya business" },
    { name: "nelson", age: 12, bio: "Nonnya business" },
    { name: "nelson", age: 12, bio: "Nonnya business" },
    { name: "nelson", age: 12, bio: "Nonnya business" },
    { name: "nelson", age: 12, bio: "Nonnya business" },
  ];
  return (
    <section>
      <h2>Available users</h2>

      <ul>
        {users?.map((user) => (
          <li>
            <h3>{user.name}</h3>
            <span>{user.age}</span>
            <span>{user.bio}</span>
            <Button text="Delete user" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DisplayCards;
