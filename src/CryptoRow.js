function CryptoRow({
  coin: {
    id,
    symbol,
    name,
    image,
    current_price,
    last_updated,
    price_change_percentage_24h,
    market_cap_rank,
  },
}) {
  const changeColor =
    price_change_percentage_24h < 0 ? "bg-red-500" : "bg-green-500";
  return (
    <>
      <div className="flex justify-between space-y-8">
        <div className="flex items-center">
          <p className="font-bold mr-2">{market_cap_rank}.</p>
          <img className="ml-2 w-8 h-8 mr-4" src={image} alt="Crypto Coin" />

          <div className="flex flex-col">
            <p className="uppercase font-semibold text-2xl text-white">
              {symbol}
            </p>
            <p className="text-xs">{name}</p>
          </div>
        </div>
        <p>${current_price}</p>
        <div>
          <p className={`${changeColor} rounded-full p-2 text-white`}>
            {price_change_percentage_24h}%
          </p>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}
export default CryptoRow;
