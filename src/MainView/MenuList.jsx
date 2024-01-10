import React, { useContext } from "react";
import { ContextApp } from "../context/ContextApi";
const MenuList = () => {
  const { userdata, setShowAll, setDataItems } = useContext(ContextApp);

  const handleItems = (category) => {
    if (category === "All") {
      setDataItems(userdata);
      setShowAll(true);
    } else {
      const filterArr = userdata.filter((item) => category === item.category);
      setDataItems(filterArr);
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
