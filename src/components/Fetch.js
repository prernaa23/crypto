 import  { useEffect, useState } from "react";

export const Fetch = () => {
  const [data, setData] = useState([]);

  async function getData() {
  const category = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
  );
  const myjson = await category.json();
 
  const final = [...myjson];
  return final;
}

  useEffect(() => {
    getMyData();
  }, []);

  const getMyData = async () => {
    try {
      const res = await getData();
      setData(res);
    } catch (err) {
      console.error(err);
    }
  };
  return (data);
  
}
