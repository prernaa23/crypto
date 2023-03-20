import React from "react";
// import { Fetch } from "./Fetch";
function All({ filteredCoins }) {
  //   const d = Fetch();
  //   console.log(d);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">1h</th>
            <th scope="col">24h</th>
            <th scope="col">7d</th>
            <th scope="col">Market Cap</th>
          </tr>
        </thead>

        <tbody>
          {filteredCoins?.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.market_cap_rank}</th>
              <td>
                <img src={item.image} alt="" width="25px" /> {item.name}
              </td>
              <td>${item.current_price}</td>
              <td>
                {Math.round(item.price_change_percentage_1h_in_currency * 100) /
                  100}%
              </td>
              <td>
                {Math.round(item.price_change_percentage_24h_in_currency * 100) /
                  100}%
              </td>
              <td>
                {Math.round(item.price_change_percentage_7d_in_currency * 100) /
                  100}%
              </td>
              <td>${item.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default All;

/*
    return (
      <ul>
        {data.map(item => {
          return <li>{item[0].id}</li>;
        })}
      </ul>
    );
Math.round(item.price_change_percentage_1h_in_currency * 100)/100
    <div>
      <h1> Fetch data from an api in react </h1>{" "}
      {data.map((item) => (
        <ol key={item.id}>
          Name: {item.name}, Price: {item.current_price}, Rank:
          {item.market_cap_rank}
        </ol>
      ))}
    </div>


<div className="container text-center">
  <div className="row align-items-start">
    <div className="col">
{item.market_cap_rank}
    </div>
    <div className="col">
{item.name}    </div>
    <div className="col">
 {item.current_price}    </div>
  </div>
</div>
*/
