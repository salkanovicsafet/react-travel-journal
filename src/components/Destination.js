import PathIcon from "../assets/images/Path.png";

export default function Destination() {
  return (
    <div className="destination flex">
      <div className="destination__photo">
        <img
          src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Mount Fuji"
        />
      </div>
      <div className="destination__info">
        <div className="destination__info__location flex">
          <img
            src={PathIcon}
            alt="Path Icon"
            className="destination__info__location__pathIcon"
          />
          <div className="destination__info__location__country">Japan</div>
          <a
            href="https://goo.gl/maps/1DGM5WrWnATgkSNB8"
            className="destination__info__location__gmaps"
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="destination__info__name">Mount Fuji</h1>
        <div className="destination__info__date">
          12 Jan, 2021 - 24 Jan, 2021
        </div>
        <div className="destination__info__content">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </div>
      </div>
    </div>
  );
}
