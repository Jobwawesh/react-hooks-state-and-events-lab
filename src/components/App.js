import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [dark, setToDark] = useState(false)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  function darkModeToggle(event){
    setToDark(dark => !dark)
  }
  const appClass = false ? "App dark" : "App light"

  return (
    <div className={dark ? 'App dark' : 'App light'}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkModeToggle}>{dark ? "Dark" : "Light"} Mode </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
