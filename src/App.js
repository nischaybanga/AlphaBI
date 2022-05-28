import DisplayComponent from "./components/DisplayComponent";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
function App() {
  const [gifArray, setGifArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
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
  async function onSearchHandler(searchedItem) {
    setIsLoading(true);
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&limit=30&rating=g&q=${searchedItem}`
    );
    setGifArray(response.data.data);
    setIsLoading(false);
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = gifArray.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="App">
      <SearchBar setSearch={onSearchHandler}></SearchBar>
      {!isLoading && <DisplayComponent gifs={currentPosts}></DisplayComponent>}
      {isLoading && <h1>loading</h1>}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={gifArray.length}
        paginate={paginate}
      ></Pagination>
    </div>
  );
}
//https://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&limit=30&rating=g&q=car
//https://api.giphy.com/v1/gifs/trending?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&limit=30&rating=g
//apiKey: GlVGYHkr3WSBnllca54iNt0yFbjz7L65
export default App;
