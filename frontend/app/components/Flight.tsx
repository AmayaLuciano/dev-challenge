type Props = {};

interface Flight {
  date: string;
  availability: number;
  destination: string;
  origin: string;
  price: number;
}

const Flight = (props: Props) => {
  return (
    <div>Flight</div>
    // <div>
    //   {allFlights.map((i: Flight) => {
    //     return (
    //       <div
    //         className="flex  w-[800px] mt-10 border-2 h-36 rounded-md justify-between"
    //         key={i.price * Math.random()}
    //       >
    //         <div className="flex justify-evenly w-1/2 text-center">
    //           <div className="flex flex-col my-auto">
    //             {i.origin === 'COR' && <div className="text-sm">Cordoba</div>}
    //             {i.origin === 'EPA' && (
    //               <div className="text-sm">Buenos Aires</div>
    //             )}
    //             {i.origin === 'BRC' && <div className="text-sm">Bariloche</div>}
    //             {i.origin === 'MDZ' && <div className="text-sm">Mendoza</div>}
    //             <div className="text-gray-500"> {i?.origin}</div>
    //           </div>
    //           <div className="flex flex-col my-auto">
    //             {i.destination === 'COR' && (
    //               <div className="text-sm">Cordoba</div>
    //             )}
    //             {i.destination === 'EPA' && (
    //               <div className="text-sm">Buenos Aires</div>
    //             )}
    //             {i.destination === 'BRC' && (
    //               <div className="text-sm">Bariloche</div>
    //             )}
    //             {i.destination === 'MDZ' && (
    //               <div className="text-sm">Mendoza</div>
    //             )}
    //             <div className="text-gray-500">{i?.destination}</div>
    //           </div>
    //         </div>

    //         <div className="flex">
    //           <div className="flex my-auto mx-auto cursor-pointer bg-flybondi-yellow w-24 h-10  rounded-3xl">
    //             <p className="mx-auto my-auto">${i.price}</p>
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default Flight;
