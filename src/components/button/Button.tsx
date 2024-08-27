import { ButtonProps } from "../../types/props";
import classes from "./button.module.scss";

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button className={`${classes.button} ${className}`} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
