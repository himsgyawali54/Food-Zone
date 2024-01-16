import React, { useState } from "react";
import MenuList from "./MenuList";
import ItemsList from "./ItemsList";
import Nav from "./Nav";

const MainPage = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <>
      <div className=" bg-slate-900 p-10">
        <Nav />
        <MenuList showAll={showAll} setShowAll={setShowAll} />
      </div>
      <ItemsList showAll={showAll} setShowAll={setShowAll} />
    </>
  );
};

export default MainPage;
