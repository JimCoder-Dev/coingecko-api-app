import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Coin from "./Coin";

function SearchCoin() {
  const { id } = useParams();
  const [coin, setCoin] = useState({});

  useEffect(() => {
    requestCoin();
  }, []);

  async function requestCoin() {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false`
    );
    const data = await response.json();
    console.log(data);

    setCoin(data);
  }

  return (
    <div>
      <Coin coin={coin} />
    </div>
  );
}

export default SearchCoin;
