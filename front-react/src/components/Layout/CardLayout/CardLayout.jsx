import classes from "./CardLayout.module.css";
const CardLayout = (props) => {
  return <div className={classes.main}>{props.children}</div>;
};
export default CardLayout;
