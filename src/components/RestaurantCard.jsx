import resList from "../utils/mockData";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div
      className="res-card"
      style={{ backgroundColor: "#f0f0f0", borderRadius: "20px" }}
    >
      <img
        className="res-logo"
        alt="Biryani"
        // src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>₹{costForTwo / 100} FOR TWO</h5>
      <h5>{deliveryTime}</h5>
      <h5>{avgRating}</h5>
    </div>
  );
};

export default RestaurantCard;
