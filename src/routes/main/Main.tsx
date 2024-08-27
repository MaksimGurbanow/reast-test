import { useGetProductsQuery } from "../../redux/productsApi";
import classes from "./main.module.scss";
import Loader from "../../components/common/loader/Loader";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Main = () => {
  const { data, isLoading, isFetching } = useGetProductsQuery({ limit: 30 });
  const [onlyLiked, setOnlyLiked] = useState(false);
  const likedProducts = useSelector((state: RootState) => state.likedItems);
  const deletedProducts = useSelector((state: RootState) => state.deletedItems);
  const filteredItems = useMemo(() => {
    const filteredProducts =
      data?.products.filter(
        (product) => !deletedProducts.includes(product.id.toString())
      ) || [];
    if (onlyLiked)
      return filteredProducts.filter((product) =>
        likedProducts.includes(product.id.toString())
      );
    return filteredProducts;
  }, [data?.products, deletedProducts, likedProducts, onlyLiked]);
  return (
    <div className={classes.mainPage}>
      {isFetching || (isLoading && <Loader />)}
      <Button onClick={() => setOnlyLiked((prev) => !prev)} className={classes.favoriteButton}>Favorite</Button>
      <div className={classes.productsList}>
        {filteredItems.map((product) => <Card {...product} key={product.id} />)}
      </div>
    </div>
  );
};

export default Main;
