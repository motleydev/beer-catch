import React from "react";
import Sorry from "./Sorry";

const Img = ({images}) => <img alt="beer" src={images[0].url} className="py-2 pl-2 h-64" />

const Value = ({value}) => <p className="text-lg text-gray-100">{value}</p>

const ABV = ({value}) => <Value value={value.toFixed(4) * 100} />
const Style = ({value}) => <Value value={value.name} />
const Glass = ({value}) => <Value value={value[0].name} />


const BeerDetail = ({
  name,
  abv,
  brewery,
  style,
  images,
  recommendedGlass
}) => {
  return (
    <div className="mx-auto max-w-3xl h-64 my-4 flex flex-wrap bg-gray-800 shadow-lg hover:shadow-2xl rounded-lg">
      <div className="w-48 over flex justify-center">
        <Sorry>
          <Img images={images} />
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
          <Sorry><ABV value={abv} /></Sorry>
        </div>
        <div className="py-2 px-2 flex border-b border-gray-700">
          <p className="text-lg font-bold pr-4 text-gray-400 w-14">Style</p>
          <Sorry><Style value={style} /></Sorry>
        </div>
        <div className="py-2 px-2 flex border-b border-gray-700">
          <p className="text-lg font-bold pr-4 text-gray-400 w-14">Glass</p>
          <Sorry><Glass value={recommendedGlass} /></Sorry>
        </div>
      </div>
    </div>
  );
};

export default BeerDetail;
