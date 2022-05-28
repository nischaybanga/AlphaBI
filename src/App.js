import DisplayComponent from "./components/display-images/DisplayComponent";
import SearchBar from "./components/search-bar/SearchBar";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "./components/pagination/Pagination";
function App() {
  //state-management

  const [gifArray, setGifArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  //initial loader, without searching (loads hot posts)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await axios.get(
        "https://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&limit=30&rating=g&q=hot"
      );
      setGifArray(response.data.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  //search handling, if search is empty, returns hot posts again

  async function onSearchHandler(searchedItem) {
    if(searchedItem.trim()=="")
    {
      searchedItem="hot";
    }
    setIsLoading(true);
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&limit=30&rating=g&q=${searchedItem}`
    );
    setGifArray(response.data.data);
    setIsLoading(false);
  }


  //change of page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //slicing of array to pass

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = gifArray.slice(indexOfFirstPost, indexOfLastPost);
  
  //JSX
  
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
export default App;
