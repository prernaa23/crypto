import React, { useState } from "react";
import All from "./All";

function Search({ d }) {
  const [searchField, setSearchField] = useState("");

  const filteredCoins = d.filter((coin) => {
    return coin.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return <All filteredCoins={filteredCoins} />;
  }

  return (
    <section>
      <div >
        <input
          type="search"
          placeholder="Search Coin"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
