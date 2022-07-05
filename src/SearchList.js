import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ButtonRow from "./ButtonRow";
import CryptoRow from "./CryptoRow";
import PageContext from "./PageContext";
import CoinsList from './CoinList';

const SearchList = () => {
  const [coins, setCoins] = useState([{}]);
  //const [currentPage, setCurrentPage] = useState(1);

  const { currentPage, loading, toggleLoading } = useContext(PageContext);

  useEffect(() => {
    requestCoins();
  }, [currentPage]);

  async function requestCoins() {
    toggleLoading(true)
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=${currentPage}&sparkline=false&price_change_percentage=24h`
    );
    const data = await response.json();
    toggleLoading(false)
    console.log(data);

    setCoins(data);
  }

  return (
    <div>
      {!loading === false ? (
        <h1 className="text-center text-5xl">Loading.....</h1>
      ):(
        <CoinsList coins={coins} />
      )}
    </div>
  );
};

export default SearchList;
