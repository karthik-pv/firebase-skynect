import React from "react";

const AcceleratorTile = ({ acceleratorObj }) => {
  return (
    <a href={acceleratorObj.link} target='_blank'>
        <div
        className="bg-white text-black p-4 m-2 rounded-lg shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
        >
        <h2 className="text-xl font-bold text-center">{acceleratorObj.name}</h2>
        </div>
    </a>
  );
};

export default AcceleratorTile;
