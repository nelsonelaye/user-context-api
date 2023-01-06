import "./index.module.scss";
import { props as AppProps } from "./types";

const Button = ({ text }: AppProps) => {
  return <button>{text}</button>;
};

export default Button;
