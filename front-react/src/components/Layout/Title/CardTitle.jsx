import classes from "./CardTitle.module.css";
const CardTitle = (props) => {
  return <div className={classes.main}>{props.title}</div>;
};
export default CardTitle;
