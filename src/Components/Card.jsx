import React from "react";

const Card = ({values ,handler,friends ,index}) => {
    const {name, img, profession} = values;
  return (
    <>
      <div className="w-52 rounded-md overflow-hidden">
        <div className="w-full h-32 bg-blue-400">
          <img className="w-full h-full object-cover overflow-hidden object-[center_top]" src={img} alt="" />
        </div>
        <div className="w-full p-3">
          <h3 className=" font-semibold text-lg">{name}</h3>
          <h2 className="text-xs">{profession}</h2>
          <button onClick={() =>handler(index)}
            className={` mt-4 w-fit rounded-full text-base ${friends ? "bg-red-500":"bg-blue-500"} p-2`}
          >
            {friends? "Remove Friend" : "Add Friend"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
