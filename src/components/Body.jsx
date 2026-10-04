import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData.js";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([
    {
      data: {
        id: "121603",
        name: "Kannur Food Point",
        cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
        cuisines: ["Kerala", "Chinese"],
        costForTwo: 30000,
        deliveryTime: 16,
        avgRating: "3.9",
      },
    },
    {
      data: {
        id: "121604",
        name: "Meghana Food Point",
        cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
        cuisines: ["Kerala", "Chinese"],
        costForTwo: 30000,
        deliveryTime: 16,
        avgRating: "4.9",
      },
    },
    {
      data: {
        id: "121605",
        name: "udipi Food Point",
        cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
        cuisines: ["Kerala", "Chinese"],
        costForTwo: 30000,
        deliveryTime: 16,
        avgRating: "4.2",
      },
    },
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.zomato.com/webroutes/auth/init");

    const json = await data.json();
    const countries = json?.all_country_code;
    
    // setListOfRestaurants(countries);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const newListOfRestaurants = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4,
            );
            setListOfRestaurants(newListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
