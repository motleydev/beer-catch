import React from 'react'

const BeerDetail = ({ name, abv, brewery, style }) => {
    return (
      <div className="mx-auto max-w-3xl h-64 my-4 flex flex-wrap bg-gray-800 shadow-lg hover:shadow-2xl rounded-lg">
        <img
          alt="beer"
          src="https://media.graphcms.com/oQrOsMvyT5mD0R2L46f3"
          className="h-full py-2 pl-2"
        />
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
            <p className="text-lg text-gray-100">{abv.toFixed(4) * 100}</p>
          </div>
          <div className="py-2 px-2 flex border-b border-gray-700">
            <p className="text-lg font-bold pr-4 text-gray-400 w-14">Style</p>
            <p  className="text-lg text-gray-100">{style.name}</p>
          </div>
          <div className="py-2 px-2 flex border-b border-gray-700">
            <p className="text-lg font-bold pr-4 text-gray-400 w-14">ABV</p>
            <p className="text-lg text-gray-100">{abv.toFixed(4) * 100}</p>
          </div>
        </div>
      </div>
    );
  };

  export default BeerDetail