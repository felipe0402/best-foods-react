import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Lado Esquerdo  */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1
          className="text-2xl sm:text-3xl lg:text-4xl px-2 select-none  "
          translate="no"
        >
          Best <span className=" font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex  items-center bg-gray-200 rounded-full p-1 text-[14px] select-none">
          <p className="bg-black text-white rounded-full p-2">Delievery</p>
          <p className=" p-2">Pickup</p>
        </div>
      </div>

      {/* Barra de pesquisa */}
      <div className=" bg-gray-200 rounded-full flex items-center px-2 w-[200] sw:W-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className=" bg-transparent p-2 w-full"
          type="text"
          placeholder="Pesquisar alimento perfeito"
        />
      </div>

      {/* Botao do carrinho */}
      <button className="bg-black text-white  hidden md:flex items-center py-2  rounded-full select-none">
        <BsFillCartFill size={20} className="mr-2" />
        Carrinho
      </button>

      {/* Mobile menu */}
      {/* Overlay  Pt-Br=Sobreposiçao  */}
      {nav ? (
        <div className=" bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Menu da gaveta Lateral */}
      <div
        className={
          nav
            ? " fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : " fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 select-none" translate="no">
          Best <span className=" font-bold">Eats</span>
        </h2>
        <nav>
          <ul className=" flex flex-col p-4 text-gray-800 cursor-pointer select-none   ">
            <li className=" text-xl py-4 flex ">
              <TbTruckDelivery size={25} className="mr-4" />
              Pedidos
            </li>
            <li className=" text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" />
              Favoritos
            </li>
            <li className=" text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" />
              Carteira
            </li>
            <li className=" text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" />
              Promoçaes
            </li>
            <li className=" text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" />O melhor
            </li>
            <li className=" text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" />
              Convida amigos
            </li>{" "}
            <li className=" text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" />
              Ajuda
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
