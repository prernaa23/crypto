import React, { useState } from "react";
import All from "./All";
import background from "./crypto.webp";

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
      <div className="example">
        <div>
          <img className="image" src={background} alt="background" />
        </div>
        <div className="overlay">
          <div className="con">
            <h1 >Crypto-Trends</h1>
            <p>Get information about all crypto currencies at one place!</p>
          </div>
          <input 
            className="form-control bg-transparent bg-gradient"
            type="search"
            placeholder="Search Currency"
            onChange={handleChange}/>
        </div>
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
