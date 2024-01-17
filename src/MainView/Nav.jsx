import React, { useState } from "react";
import { useGetFoodItemsQuery } from "../Api/Api";
import { useDispatch } from "react-redux";
import { setFoodItems } from "../feature/AppReducer";
const Nav = () => {
  const { data } = useGetFoodItemsQuery();

  const [searchquery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() === "") {
      dispatch(setFoodItems(data));
    } else {
      const searchArr = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log(searchArr);
      dispatch(setFoodItems(searchArr));
    }
  };
  return (
    <nav class="flex-none  md:flex justify-around items-center">
      <div class="w-full md:w-1/2">
        <h3 className="text-white font-bold text-2xl">
          F<span className="text-red-600">oo</span>dyZone
        </h3>
      </div>
      <div class="w-full mt-5 md:mt-0 md:w-1/5 ">
        <input
          type="text"
          placeholder="Search Food"
          onChange={handleSearch}
          value={searchquery}
          className="border-solid border-2 border-black-500 p-2"
        />
      </div>
    </nav>
  );
};

export default Nav;
