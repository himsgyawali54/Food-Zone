import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { foodItemsDetails, selectFoodArray } from "../feature/AppReducer";
const MenuList = () => {
  const [showAll, setShowAll] = useState(false);

  const dispatch = useDispatch();
  const fooditems = useSelector(selectFoodArray);

  const handleItems = (category) => {
    if (category === "All") {
      dispatch(foodItemsDetails());
      console.log(fooditems);
      setShowAll(true);
    } else {
      const filterArr = fooditems.filter((item) => category === item.category);
      dispatch(filterArr());
      setShowAll(true);
    }
  };

  return (
    <div className="menus text-white list-none flex gap-1 md:gap-5 justify-center mt-16">
      <li>
        <button onClick={() => handleItems("All")}>All</button>
      </li>
      <li>
        <button onClick={() => handleItems("Breakfast")}>Breakfast</button>
      </li>
      <li>
        <button onClick={() => handleItems("Lunch")}>Lunch</button>
      </li>
      <li>
        <button onClick={() => handleItems("Dinner")}>Dinner</button>
      </li>
    </div>
  );
};

export default MenuList;
