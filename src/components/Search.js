import React from "react";

function Search  () {
    return (
        <form>
        <label>
          Search:
          <input type="text" name="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}

export default Search;