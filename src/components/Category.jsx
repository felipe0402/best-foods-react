import React from "react";
import { categories } from "../data/data.js";

const Category = () => {
  return (
    <div className="max-w-{1640px} m-auto  px-4 py-12">
      <h1 className=" text-orange-600 font-bold  text-4xl text-center">
        Menu de classificação mais alta
      </h1>
      {/* Categories */}
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-6 py-6 ">
        {categories.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
            >
              <h2 className=" font-bold sm:text-xl">{item.name}</h2>
              <img src={item.image} alt={item.name} className="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Category;