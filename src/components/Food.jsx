import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  const [foods, setFoods] = useState(data);

  //Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className=" max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center ">
        Menu com melhor classificação
      </h1>
      {/* Filtro Row*/}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filtro type */}
        <div>
          <p className=" font-bold text-gray-700 "> Tipo de filtro</p>
          <div className=" flex justify-between flex-wrap   ">
            <button
              onClick={() => setFoods(data)}
              className=" m-1 select-none border-orange-600 text-orange-600 hove:bg-orange-600 hover:text-orange-100"
            >
              Todos
            </button>
            <button
              onClick={() => filterType("burger")}
              className=" m-1 select-none border-orange-600 text-orange-600 hove:bg-orange-600 hover:text-orange-100"
            >
              Hamburguer
            </button>
            <button
              onClick={() => filterType("pizza")}
              className=" m-1 select-none border-orange-600 text-orange-600 hove:bg-orange-600 hover:text-orange-100"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className=" m-1 select-none border-orange-600 text-orange-600 hove:bg-orange-600 hover:text-orange-100"
            >
              Saladas
            </button>
            <button
              onClick={() => filterType("chicken")}
              className=" m-1 select-none border-orange-600 text-orange-600 hove:bg-orange-600 hover:text-orange-100"
            >
              Frango
            </button>
          </div>
        </div>
        {/* Filro prices */}
        <div>
          <p className=" font-bold text-gray-700 ">Filtra Preços</p>
          <div className="flex justify-between max-w-[390px ] w-full">
            <button
              onClick={() => filterPrice("$")}
              className=" m-1 select-none border-orange-600 text-orange-600 hove:bg-orange-600 hover:text-orange-100"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className=" m-1 select-none border-orange-600 text-orange-600 hove:bg-orange-600 hover:text-orange-100"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className=" m-1 select-none border-orange-600 text-orange-600 hove:bg-orange-600 hover:text-orange-100"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className=" m-1 select-none border-orange-600 text-orange-600 hove:bg-orange-600 hover:text-orange-100"
            >
              $$$
            </button>
          </div>
        </div>
      </div>
      {/*Disolay foods  */}
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4   cursor-pointer">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full select-none h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className=" bg-orange-500 text-white p-1 rounded-full ">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Food;
