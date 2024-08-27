import classes from './loader.module.scss';

const Loader = () => {
  return (
    <div className={classes.loaderWrapper}>
      <div className={classes.loader}></div>
    </div>
  )
}

export default Loader