import { FaTwitter, FaReddit } from "react-icons/fa";
import gecko from "./coingecko_logo.png";


function Coin({ coin }) {

  const {
    community_data: { twitter_followers, reddit_subscribers } = {
      twitter_followers: 0,
      reddit_subscribers: 0,
    },
  } = coin;
  
  const { description: { en } = { en: "" } } = coin;
  const { image: { large } = { large: "" } } = coin;
  const dynamicSpan = `<p>${en}</p>`;
  const twitterStyle = {
    color: "#1DA1F2",
    fontSize: "1.5em",
    marginRight: "1rem",
  };

  const redditStyle = {
    color: "#FF4500",
    fontSize: "1.5em",
    marginLeft: "1em",
    marginRight: "0.5rem",
    backgroundColor: "#fff",
    borderRadius: "100%",
  };

  return (
    <div className="mx-auto text-primary max-w-3xl">
      <div className="flex items-center mb-10">
        <img className="mr-20 " src={large} />
        
        <h1 className="font-bold text-6xl">
            {coin.name} <span className="font-thin"></span>({coin.symbol})
          </h1>
      </div>

      <p className="flex items-center mb-4">
        <FaTwitter style={twitterStyle} />
        Folllowers {twitter_followers.toLocaleString()}
        <FaReddit style={redditStyle} /> Subscriber:{" "}
        {reddit_subscribers.toLocaleString()}
        <img className="ml-6 w-6" src={gecko} />{" "}
        <p className="ml-2">Score: {coin.coingecko_score}</p>
      </p>

      
      <div
        className="description-text bg-secondary p-8 rounded-lg leading-7"
        dangerouslySetInnerHTML={{ __html: dynamicSpan }}
      ></div>
    </div>
  );
}

export default Coin;
