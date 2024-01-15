import React, { useState } from "react";

const Nav = () => {
  const [userdata, setUserData] = useState([]);
  const [dataitems, setDataItems] = useState([]);
  const [searchquery, setSearchQuery] = useState("");
  const [resfound, setResFound] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() === "") {
      setDataItems(userdata);
    } else {
      const searchArr = userdata.filter((item) =>
        item.name.toLowerCase().includes(searchquery.toLowerCase())
      );
      setDataItems(searchArr);
    }

    const filteredItems = userdata.filter(
      (items) => items.name.toLowerCase() !== searchquery.toLowerCase()
    );
    if (filteredItems.length > 0) {
      setResFound(true);
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
