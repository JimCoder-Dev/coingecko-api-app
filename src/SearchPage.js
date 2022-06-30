import { useState } from "react";

function SearchPage() {
  const [searchCoin, setSearchCoin] = useState([{}]);
  const [searchTerm, setSearchTerm] = useState("");


  function handleClick() {
    console.log("HELLO WORLD");
  }

  async function performSearch() {
    console.log(searchTerm);
    const response = await fetch(
      `https://api.coingecko.com/api/v3/search?query=${searchTerm}`
    );
    const data = await response.json();

    setSearchCoin(data.coins);
    console.log(data.coins);
  }

  return (
    <div className="pt-12">
      <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          performSearch();
        }}
        class="form-control"
      >
        <div class="input-group flex justify-center">
          <input
            type="text"
            placeholder="Search for crypto.."
            class="input input-bordered w-1/2"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button class="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
      <div>
        {!searchCoin.length ? (
          <h1 className="text-red-500 font-bold">
            No cryto currency found please try again
          </h1>
        ) : (
          searchCoin.map((coin) => (
            <div className="flex justify-between text-primary py-2 max-w-2xl">
              <div className="flex">
                <img className="mr-2" src={coin.thumb} alt={coin.name} />
                <h1>{coin.name}</h1>
              </div>
              <div>
                <p>
                  <span className="text-primary"></span> {coin.market_cap_rank}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      </div>
      
      
    </div>
    
  );
};

export default SearchPage;