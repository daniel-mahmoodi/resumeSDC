import classes from "./OngoingSites.module.css";
const CardItem = (props) => {
  return (
    <div className="card">
      <img className="card-img-top m-0" src={props.item.imgUrl} alt="Card" />
      <div className={`${[`card-body`]} ${classes.cardBody}`}>
        <h5 className="card-title">{props.item.title}</h5>
        <p className="card-text">{props.item.content}</p>
        <a href={props.item.linkUrl} className="btn btn-primary">
          `Go to ${props.item.title}`
        </a>
      </div>
      <div className="card-footer">
        <small className="text-muted">{props.item.pobilshedDate}</small>
      </div>
    </div>
  );
};

export default CardItem;
