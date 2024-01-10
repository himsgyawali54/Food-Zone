import React, { createContext, useState } from "react";
export const ContextApp = createContext("");

const ContextApi = ({ children }) => {
  const [showAll, setShowAll] = useState(false);

  const [userdata, setUserData] = useState([]);
  const [dataitems, setDataItems] = useState([]);
  const [searchquery, setSearchQuery] = useState("");
  const [resfound, setResFound] = useState(false);

  return (
    <ContextApp.Provider
      value={{
        showAll,
        setShowAll,
        userdata,
        setUserData,
        dataitems,
        setDataItems,
        searchquery,
        setSearchQuery,
        resfound,
        setResFound,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};

export default ContextApi;
