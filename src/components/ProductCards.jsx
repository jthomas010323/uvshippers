import React from "react";

const ProductCards = ({ name, imgUrl }) => {
  return (
    <div className="mx-16 my-5 block max-w-[18rem] rounded-lg text-surface shadow-secondary-1 bg-shippers-orange">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img className="rounded-t-lg h-44 w-full" src={imgUrl} alt="" />
      </div>
      <div className="p-2 ">
        <p className=" text-center text-xl font-medium text-black">{name}</p>
      </div>
    </div>
  );
};
export default ProductCards;
