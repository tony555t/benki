import React from "react";

function Search  ({handleSearch}) {
    return (
        <form className="mt-3"> 
        <label>
          Search:
          <input type="text" name="text" onChange={handleSearch} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}

export default Search;