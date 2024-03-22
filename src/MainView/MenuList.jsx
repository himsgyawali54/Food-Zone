import React, { useState } from "react";
import { useGetFoodItemsQuery } from "../Api/Api";
import { useDispatch } from "react-redux";
import { setFoodItems } from "../feature/AppReducer";

const MenuList = ({ showAll, setShowAll }) => {
  const { data } = useGetFoodItemsQuery();
  console.log(data);
  const dispatch = useDispatch();

  const handleItems = (category) => {
    if (category === "All") {
      dispatch(setFoodItems(data));
      console.log(dispatch(setFoodItems(data)));
      setShowAll(true);
    } else {
      const filterArr = data.filter((item) => category === item.category);
      dispatch(setFoodItems(filterArr));
      console.log(dispatch(setFoodItems(filterArr)));
      setShowAll(true);
    }
  };

  return (
    <>
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
    </>
  );
};

export default MenuList;
