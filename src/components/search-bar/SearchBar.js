import React, { useRef } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import "./SearchBar.css";
function SearchBar(props) {
  const searchedItem = useRef(); //reference

  //handling form submission
  function onSearchHandler(event) {
    event.preventDefault();
    props.setSearch(searchedItem.current.value);
  }

  //JSX
  return (
    <div className="container">
      <form className="formClass" onSubmit={onSearchHandler}>
      <div className="icon-container">
        <BiSearchAlt2 className="icon" />
        </div>
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
