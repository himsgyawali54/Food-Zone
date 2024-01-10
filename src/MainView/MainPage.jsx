import React from "react";
import MenuList from "./MenuList";
import ItemsList from "./ItemsList";
import Nav from "./Nav";

const MainPage = () => {
  return (
    <>
      <div className=" bg-slate-900 p-10">
        <Nav />
        <MenuList />
      </div>
      <ItemsList />
    </>
  );
};

export default MainPage;
