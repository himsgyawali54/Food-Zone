import React from "react";
import { useSelector } from "react-redux";

const ItemsList = ({ showAll }) => {
  const fdata = useSelector((state) => state.foodItems);

  const data = fdata?.FoodItems;
  const ldata = fdata.isLoading;

  return (
    <>
      <div className="container">
        {showAll ? (
          <div className="grid md:grid-cols-2 my-10 gap-9">
            {ldata ? (
              <div>Loading.. </div>
            ) : data?.length === 0 ? (
              <p>Opps Items not Found</p>
            ) : (
              data.map((items) => (
                <div
                  className="card border-solid border p-5 shadow"
                  key={items.id}
                >
                  <div className="grid grid-cols-2 gap-5 items-center">
                    <div className="col-span-1">
                      <img src={items.image} alt="" />
                    </div>

                    <div className="col-span-1">
                      <h3 className="font-bold py-1">{items.name}</h3>
                      <h4>
                        <span className="font-medium">Category: </span>
                        {items.category}
                      </h4>
                      <button className="bg-yellow-500 p-2 my-2">
                        Price: Rs.
                        {items.price}
                      </button>
                      <p>
                        <span className="font-medium">Des: </span>
                        {items.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center mt-28 gap-5 menu-list">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13V1m0 0L1 5m4-4 4 4"
              />
            </svg>
            <div className="card shadow-xl border-solid border  p-3 w-fit pop">
              <h2 className="font-bold">
                Click Above Buttons to see and Search Fooditems
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemsList;
