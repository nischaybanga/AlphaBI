import DisplayComponent from "./components/DisplayComponent";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [gifArray, setGifArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await axios.get(
        "https://api.giphy.com/v1/gifs/trending?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&limit=30&rating=g"
      );
      setGifArray(response.data.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  async function onSearchHandler(searchedItem){
    //console.log(searchedItem);
    setIsLoading(true);
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&limit=30&rating=g&q=${searchedItem}`
    );
    setGifArray(response.data.data);
    setIsLoading(false);
  }
  //console.log(gifArray);
  return (
    <div className="App">
      <SearchBar setSearch={onSearchHandler}></SearchBar>
      {!isLoading && <DisplayComponent gifs={gifArray}></DisplayComponent>}
      {isLoading && <h1>loading</h1>}
    </div>
  );
}
//https://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&limit=30&rating=g&q=car
//https://api.giphy.com/v1/gifs/trending?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&limit=30&rating=g
//apiKey: GlVGYHkr3WSBnllca54iNt0yFbjz7L65
export default App;
