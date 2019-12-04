import React from 'react';


const Mock = {
  "name": "Hirsch Helles",
  "ratings": [],
  "abv": 0.048,
  "brewery": {
    "name": "Hirsch-Brauerei Honer GmbH & Co. Kg",
    "founded": "1782-01-01T00:00:00.000Z"
  },
  "style": {
    "name": "Helles"
  },
  "images": [
    {
      "url": "https://media.graphcms.com/oQrOsMvyT5mD0R2L46f3",
      "width": 350
    }
  ],
  "snaps": []
}

const BeerDetail = () => {
  const {name, abv, brewery, style} = Mock
  return (
    <div className="h-20 border-b border-gray-800">
      <img alt="beer" src="https://media.graphcms.com/oQrOsMvyT5mD0R2L46f3" height="100%" />
      <h1 className="fontSize-xl">{name}</h1>
    </div>
  )
}

function App() {
  return (
    <div className="container mx-auto max-w-3xl bg-gray-200">
      {[...new Array(10)].map(BeerDetail)}
    </div>
  );
}

export default App;
