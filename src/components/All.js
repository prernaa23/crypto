import React from "react";
function All({ filteredCoins }) {

  return (
    <div>
      <table className="table table-striped  table-hover">
        <thead className="table-dark">
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
                  100}
                %
              </td>
              <td>
                {Math.round(
                  item.price_change_percentage_24h_in_currency * 100
                ) / 100}
                %
              </td>
              <td>
                {Math.round(item.price_change_percentage_7d_in_currency * 100) /
                  100}
                %
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
