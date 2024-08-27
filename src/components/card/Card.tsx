import { CardProps } from "../../types/props";
import classes from "./card.module.scss";
import Star from "../../assets/star.svg?react";
import StarHalf from "../../assets/star-half.svg?react";
import StarFill from "../../assets/star-fill.svg?react";

const Card = ({ title, images, rating, price }: CardProps) => {
  console.log(rating);
  return (
    <div className={classes.card}>
      <h4 className={classes.cardTitle}>{title}</h4>
      <img alt={title} src={images[0]} className={classes.cardImage} />
      <div className={classes.cardRating}>
        {Array.from({ length: 5 }).map((_, index) => {
          if (rating - index - 1 >= 1) return <StarFill width={30} height={30} />
          if (rating - index - 1 >= 0) return <StarHalf width={30} height={30} />
          return <Star width={30} height={30} />
        })}
      </div>
      <div className={classes.cardPrice}>{price}$</div>
    </div>
  );
};

export default Card;
