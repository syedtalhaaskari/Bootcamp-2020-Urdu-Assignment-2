import React from 'react';
import './App.css';
import Dinner from "./dinner";
import Breakfast from "./breakfast";

function App() {
  return (
    <div className="App">
      {/* <Dinner></Dinner> */}
      <Dinner dishName="Chicken Karahi" sweetDish="Kheer"/>

      <hr/>

      {/* Breakfast */}
      <Breakfast meal="omelette" drink="milkshake" />
    </div>
  );
}

export default App;
