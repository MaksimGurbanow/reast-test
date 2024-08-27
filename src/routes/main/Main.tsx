import { useGetProductsQuery } from "../../redux/productsApi";
import classes from "./main.module.scss";
import Loader from "../../components/common/loader/Loader";
import Card from "../../components/card/Card";

const Main = () => {
  const { data, isLoading, isFetching } = useGetProductsQuery({ limit: 30 });
  return (
    <div className={classes.mainPage}>
      { isFetching || isLoading && <Loader /> }
      <div className={classes.productsList}>{data && data.products.map((product) => <Card {...product} />)}</div>
    </div>
  );
};

export default Main;
