import { CardProps } from "../../types/props";
import classes from "./card.module.scss";
import Star from "../../assets/star.svg?react";
import StarHalf from "../../assets/star-half.svg?react";
import StarFill from "../../assets/star-fill.svg?react";
import Button from "../button/Button";
import LikeFill from "../../assets/heart-fill.svg?react";
import Like from "../../assets/heart.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { MouseEvent, useMemo } from "react";
import { like, unlike } from "../../redux/likedProducts";
import { addToBin } from "../../redux/deletedProducts";
import { useNavigate } from "react-router-dom";

const Card = ({ title, images, rating, price, id }: CardProps) => {
  const likedProducts = useSelector((state: RootState) => state.likedItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLiked = useMemo(() => {
    return likedProducts.find((productId) => productId === id.toString());
  }, [likedProducts, id]);
  const handleSave = (e: MouseEvent) => {
    e.stopPropagation();
    if (isLiked) dispatch(unlike(id.toString()));
    if (!isLiked) dispatch(like(id.toString()));
  };
  const handleDelete = (e: MouseEvent) => {
    e.stopPropagation();
    dispatch(addToBin(id.toString()));
  };
  return (
    <div className={classes.card} onClick={() => navigate(`/products/${id}`)}>
      <h4 className={classes.cardTitle}>{title}</h4>
      <img alt={title} src={images[0]} className={classes.cardImage} />
      <div className={classes.cardRating}>
        {Array.from({ length: 5 }).map((_, index) => {
          if (rating - index - 1 >= 1)
            return <StarFill width={30} height={30} key={`${index}-${id}`} />;
          if (rating - index - 1 >= 0)
            return <StarHalf width={30} height={30} key={`${index}-${id}`} />;
          return <Star width={30} height={30} key={`${index}-${id}`} />;
        })}
      </div>
      <div className={classes.cardPrice}>{price}$</div>
      <div className={classes.cardControllers}>
        <Button onClick={handleSave}>
          {isLiked ? <LikeFill fill="red" /> : <Like />}
        </Button>
        <Button onClick={handleDelete}>Delete</Button>
      </div>
    </div>
  );
};

export default Card;
