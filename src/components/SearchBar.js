import React from "react";

function SearchBar({ setQuery }) {
  return (
    <center>
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </center>
  );
}

export default SearchBar;
