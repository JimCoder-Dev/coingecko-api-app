import { Link } from "react-router-dom";
import ButtonRow from "./ButtonRow";
import CryptoRow from "./CryptoRow";

function CoinsList ({ coins }){
  return (
    <div className="grid  gap-4 mx-auto max-w-2xl">
      {coins.map((coin) => (
        <Link key={coin.id} to={`/${coin.id}`}>
          <CryptoRow key={coin.id} coin={coin}></CryptoRow>
        </Link>
      ))}
      <ButtonRow />
    </div>
  );
};

export default CoinsList;