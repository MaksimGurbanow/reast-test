import { useNavigate, useParams } from "react-router-dom";
import classes from "./details.module.scss";
import { useGetProductByIdQuery } from "../../redux/productsApi";
import Loader from "../../components/common/loader/Loader";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { like, unlike } from "../../redux/likedProducts";
import { MouseEvent, useMemo } from "react";
import { RootState } from "../../redux/store";

import Like from "../../assets/heart.svg?react";
import Star from "../../assets/star.svg?react";
import StarHalf from "../../assets/star-half.svg?react";
import StarFill from "../../assets/star-fill.svg?react";
import LikeFill from "../../assets/heart-fill.svg?react";
import ArrowLeft from "../../assets/arrow-left-short.svg?react";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const likedProducts = useSelector((state: RootState) => state.likedItems);
  const {
    isFetching,
    data: product,
    isLoading,
  } = useGetProductByIdQuery(id as string);
  const navigate = useNavigate();
  const isLiked = useMemo(() => {
    return likedProducts.find((productId) => productId === id);
  }, [likedProducts, id]);
  const handleSave = (e: MouseEvent) => {
    e.stopPropagation();
    if (isLiked) dispatch(unlike(id));
    if (!isLiked) dispatch(like(id));
  };
  return (
    <div className={classes.detailsPage}>
      {isFetching || (isLoading && <Loader />)}
      {product && (
        <>
          <Button onClick={() => navigate("/")} className={classes.backButton}>
            <ArrowLeft width={50} height={50} />
          </Button>
          <div className={classes.detailsTitleBlock}>
            <h2 className={classes.detailsTitle}>{product.title}</h2>
            <img
              alt={product.title}
              src={product.images[0]}
              className={classes.detailsImage}
            />
          </div>
          <div className={classes.detailsInfoBlock}>
            <div className={classes.detailsdescription}>
              {product.description}
            </div>
            <div className={classes.detailsRating}>
              {Array.from({ length: 5 }).map((_, index) => {
                if (product.rating - index - 1 >= 1)
                  return <StarFill width={30} height={30} key={index} />;
                if (product.rating - index - 1 >= 0)
                  return <StarHalf width={30} height={30} key={index} />;
                return <Star width={30} height={30} key={index} />;
              })}
            </div>
            <div className={classes.detailsPrice}>{product.price}$</div>
            <div className={classes.detailsControllers}>
              <Button
                onClick={handleSave}
                className={classes.detailsButtonLike}
              >
                {isLiked ? (
                  <LikeFill fill="red" width={40} height={40} />
                ) : (
                  <Like width={40} height={40} />
                )}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
