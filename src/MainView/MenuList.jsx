import React, { useState } from "react";
import { useGetFoodItemsQuery } from "../Api/Api";
import { useDispatch } from "react-redux";
import ItemsList from "./ItemsList";

const MenuList = ({ showAll, setShowAll }) => {
  const { data } = useGetFoodItemsQuery();

  const dispatch = useDispatch();

  const handleItems = (category) => {
    if (category === "All") {
      dispatch, data;
      console.log(data);
      setShowAll(true);
      console.log(showAll);
    } else {
      const filterArr = data.filter((item) => category === item.category);
      dispatch, filterArr;
      console.log(filterArr);
      setShowAll(true);
      console.log(showAll);
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
