import React from 'react';

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="flex w-[1100px] rounded-2xl shadow-lg h-24 justify-between align-middle bg-gray-50 mx-auto mt-10 px-4">
      <div className="my-auto w-[272px] h-[52px] border-2 border-flybondi-dark-gray bg-white flex justify-between p-1">
        <div className="flex-col justify-between ">
          <div className="text-flybondi-black text-xs">Origen</div>
          <div>Buenos Aires</div>
        </div>
        <div className="my-auto mr-2">
          <svg
            width="20px"
            height="20px"
            strokeWidth="3"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="#000000"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <div className="my-auto w-[272px] h-[52px] border-2 border-flybondi-dark-gray bg-white flex justify-between">
        <div className="flex-col justify-between p-1">
          <div className="text-flybondi-black text-xs ">Destino</div>
          <div>Ciudad o aeropuerto</div>
        </div>
        <div className=" my-auto mr-2">
          {' '}
          <svg
            width="20px"
            height="20px"
            strokeWidth="3"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="#000000"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <div className="my-auto w-[272px] h-[52px] border-2 border-flybondi-dark-gray bg-white flex justify-between">
        <div className="flex-col justify-between p-1">
          <div className="text-flybondi-black text-xs">
            {' '}
            Cantidad de pasajeros
          </div>
          <div>1 Adulto</div>
        </div>
        <div className=" my-auto mr-2">
          {' '}
          <svg
            width="20px"
            height="20px"
            strokeWidth="3"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="#000000"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>

      <div className=" my-auto text-center bg-flybondi-yellow rounded-full font-bold flex py-4 px-6 ">
        <p className="my-auto mx-auto text-lg">Buscar vuelos</p>
      </div>
    </div>
  );
};

export default SearchBar;
