import { useGetProductsQuery } from '../../redux/productsApi';
import classes from './main.module.scss';

const Main = () => {
  const { data, isLoading, isFetching } = useGetProductsQuery({ limit: 30 });
  return (
    <div className={classes.mainPage}>

    </div>
  )
}

export default Main