import React, { useState } from "react";
import MenuList from "./MenuList";
import ItemsList from "./ItemsList";
import Nav from "./Nav";

import { useSelector } from "react-redux";

const MainPage = () => {
  const [showAll, setShowAll] = useState(false);
  const selectIsAuthenticated = useSelector(
    (state) => state.register.isAuthenticated
  );
  return (
    <>
      {selectIsAuthenticated && (
        <>
          <div className=" bg-slate-900 p-10">
            <Nav />
            <MenuList showAll={showAll} setShowAll={setShowAll} />
          </div>
          <ItemsList showAll={showAll} setShowAll={setShowAll} />
        </>
      )}
    </>
  );
};

export default MainPage;
