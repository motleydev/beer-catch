import React, { useState, useEffect } from "react";
import BeerDetail from "./components/BeerDetail";
import Sorry from './components/Sorry'


function App() {
  const [beerList, updateBeerList] = useState([]);

  useEffect(() => {
    fetch("https://api-euwest.graphcms.com/v1/ck2delryp145j01et1z9mh04a/master", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: `
      {
        beers {
          name
          recommendedGlass {
            name
          }
          ratings {
            dominantFlavors {
              name
            }
            mildFlavors {
              name
            }
            approachFlavors {
              name
            }
            approach
            mouthFeel
            finish
            glass {
              name
            }
          }
          abv
          brewery {
            name
            founded
            website
          }
          style {
            name
          }
          images {
            url
            width
          }
          snaps {
            event {
              name
            }
            persons {
              name
              twitterHandle
            }
            image {
              url
              width
            }
          }
        }
      }
      ` })
    })
      .then(res => res.json())
      .then(res => {
        updateBeerList(res.data.beers)
      })
  }, []);

  return (
    <div className="bg-gray-400 overflow-auto px-6 h-screen w-screen">
      {beerList.map((beer, index) => (
        <BeerDetail key={index} {...beer} />
      ))}
    </div>
  );
}

export default App;
