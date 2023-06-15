import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  const [modes, setModes] = useState(false)
  const appClass = modes ? "App dark" : "App light"
  

  function handleClick() {
    setModes(modes => !modes)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <div>
          <button onClick={handleClick}>{modes ? "Dark Mode" : "Light Mode"}</button>
        </div>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
