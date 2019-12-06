import React from "react";
import Sorry from "./Sorry";

const BeerDetail = ({
  name,
  abv,
  brewery,
  style,
  images,
  recommendedGlass
}) => {
  return (
    <Sorry>
    <div className="mx-auto max-w-3xl h-64 my-4 flex flex-wrap bg-gray-800 shadow-lg hover:shadow-2xl rounded-lg">
      <div className="w-48 over flex justify-center">
        <Sorry>
          <img alt="beer" src={images[0].url} className="py-2 pl-2 h-64" />
        </Sorry>
      </div>
      <div className="border-l border-r border-gray-700 flex flex-wrap flex-col w-32 overflow-hidden justify-between">
        <div>
          <h1 className="py-2 px-2 text-3xl text-white font-bold w-32 leading-tight">
            {name}
          </h1>
        </div>
        <div className="py-2 px-2 bg-gray-900 h-24 w-full leading-tight text-gray-200">
          {brewery.name}
        </div>
      </div>
      <div className="flex flex-wrap flex-grow flex-col">
        <div className="py-2 px-2 flex border-b border-gray-700">
          <p className="text-lg font-bold pr-4 text-gray-400 w-14">ABV</p>
          <Sorry>
            <p className="text-lg text-gray-100">{abv.toFixed(4) * 100}</p>
          </Sorry>
        </div>
        <div className="py-2 px-2 flex border-b border-gray-700">
          <p className="text-lg font-bold pr-4 text-gray-400 w-14">Style</p>
          <p className="text-lg text-gray-100">{style.name}</p>
        </div>
        <div className="py-2 px-2 flex border-b border-gray-700">
          <p className="text-lg font-bold pr-4 text-gray-400 w-14">Glass</p>
          <p className="text-lg text-gray-100">{recommendedGlass[0].name}</p>
        </div>
      </div>
    </div>
    </Sorry>
  );
};

export default BeerDetail;
