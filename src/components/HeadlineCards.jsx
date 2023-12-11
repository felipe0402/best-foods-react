import React from "react";

const HeadlineCards = () => {
  return (
    <div className=" max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
      {/* Cards */}
      <div className=" rounded-xl relative">
        {/* Orverlay */}
        <div className=" absolute  w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Hambúrguers</p>
          <p className="px-2">Ate 8/26</p>
          <button className=" select-none border-white bg-white text-black mx-2 absolute bottom-4 ">
            Peça agora
          </button>
        </div>
        <img
          className=" max-h-[160px] md:max-h-[250px] w-full  object-cover rounded-xl select-none "
          src="https://images.unsplash.com/photo-1609167830220-7164aa360951?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=" "
        />
      </div>
      {/* Cards */}
      <div className=" rounded-xl relative">
        {/* Orverlay */}
        <div className=" absolute  w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Novos Restaurantes</p>
          <p className="px-2">Adicionados Recentemente </p>
          <button className=" select-none border-white bg-white text-black mx-2 absolute bottom-4 ">
            Peça agora
          </button>
        </div>
        <img
          className=" max-h-[160px] md:max-h-[250px] w-full  object-cover rounded-xl select-none"
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Restaurantes"
        />
      </div>
      {/* Cards */}
      <div className=" rounded-xl relative">
        {/* Orverlay */}
        <div className=" absolute  w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Entregamos Sobremesas</p>
          <p className="px-2">Deleites saborosos</p>
          <button className=" select-none border-white bg-white text-black mx-2 absolute bottom-4 ">
            Peça agora
          </button>
        </div>
        <img
          className=" max-h-[160px] md:max-h-[250px] w-full  object-cover rounded-xl select-none"
          src="https://images.unsplash.com/photo-1574085733277-851d9d856a3a?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sobremesas"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
