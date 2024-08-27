import { MouseEventHandler, ReactNode } from "react";
import { Product } from "./types";

export type CardProps = Pick<
  Product,
  "title" | "rating" | "price" | "images" | "id"
> & { liked?: boolean };

export interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
