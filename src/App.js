import React from "react";
import BeerDetail from './components/BeerDetail'

const Mock = {
  name: "Hirsch Helles",
  ratings: [],
  abv: 0.048,
  brewery: {
    name: "Hirsch-Brauerei Honer GmbH & Co. Kg",
    founded: "1782-01-01T00:00:00.000Z"
  },
  style: {
    name: "Helles"
  },
  images: [
    {
      url: "https://media.graphcms.com/oQrOsMvyT5mD0R2L46f3",
      width: 350
    }
  ],
  snaps: []
};



function App() {
  return (
    <div className="bg-gray-400 overflow-auto px-6">
      {[...new Array(10)].map(() => <BeerDetail {...Mock} />)}
    </div>
  );
}

export default App;
