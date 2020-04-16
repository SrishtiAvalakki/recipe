import React, { useEffect,useState } from "react";
import "./App.css";
 
const App = () => {

  const APP_ID = "48802a7c";
  const APP_KEY = "f953c0980e682b125dc5354692eb66d3";
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }




  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      <button className="search-button"></button>
    </div>
  );
};



export default App;
