import React from 'react';

type Props = {};

const Checkout = (props: Props) => {
  return (
    <div className="flex-col mt-10 h-[800px] border-2 rounded-md sticky top-40">
      <div className="bg-flybondi-black">Tu vuelo</div>
      <div className="bg-flybondi-gray h-16 flex">
        <p className="my-auto">Buenos aires a Bariloche</p>
      </div>
      <div className="h-24 flex">
        <p className="my-auto">17 MAY</p>
      </div>
      <div className="bg-flybondi-gray h-16 flex">
        <p className="my-auto">Buenos aires a Bariloche</p>
      </div>
      <div className="h-24 flex">
        <p className="my-auto">17 MAY</p>
      </div>
    </div>
  );
};

export default Checkout;
