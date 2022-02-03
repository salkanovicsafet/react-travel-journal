import PathIcon from "../assets/images/Path.png";

export default function Destination(props) {
  return (
    <div className="destination flex">
      <div className="destination__photo">
        <img src={props.item.imageUrl} alt={props.item.title} />
      </div>
      <div className="destination__info">
        <div className="destination__info__location flex">
          <img
            src={PathIcon}
            alt="Path Icon"
            className="destination__info__location__pathIcon"
          />
          <div className="destination__info__location__country">
            {props.item.location}
          </div>
          <a
            href={props.item.googleMapsUrl}
            className="destination__info__location__gmaps"
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="destination__info__name">{props.item.title}</h1>
        <div className="destination__info__date">
          {props.item.startDate} - {props.item.endDate}
        </div>
        <div className="destination__info__content">
          {props.item.description}
        </div>
      </div>
    </div>
  );
}
