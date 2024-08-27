import { Product } from "./types";

export type CardProps = Pick<
  Product,
  "title" | "rating" | "price" | "images"
>;
