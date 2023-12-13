import React, { useState } from "react";

function Search({ filterPlants }) {

  const [ searchWord, setSearchWord ] = useState("")

  function searchWordInput(e){
    const value = e.target.value
    setSearchWord(value)
    console.log(searchWord)
    filterPlants(value.toLowerCase())
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchWord}
        onChange={searchWordInput}
      />
    </div>
  );
}

export default Search;
