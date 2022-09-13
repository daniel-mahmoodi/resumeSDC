import classes from './BannerLayout.module.css'
const BannerLayout = (props) => {
  return <div className={classes.main}>{props.children}</div>;
};

export default BannerLayout;
