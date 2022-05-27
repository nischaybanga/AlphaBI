import React, { useRef } from "react";
import "./SearchBar.css";
function SearchBar(props) {
  const searchedItem = useRef();
  function onSearchHandler(event) {
    event.preventDefault();
    props.setSearch(searchedItem.current.value);
    searchedItem.current.value="";
  }
  return (
    <div className="container">
      <form className="formClass" onSubmit={onSearchHandler}>
        <input
          ref={searchedItem}
          type="text"
          placeholder="Article name or keywords..."
          className="inputClass"
        ></input>
        <button className="buttonClass">Search</button>
      </form>
    </div>
  );
}
export default SearchBar;
