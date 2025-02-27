import { Link } from "react-router-dom";

const TrendingCoins = ({ trendingCoins, getRandomTrendingCoins }) => {
  return (
    <div className="mt-5 mb-10 w-full max-w-12/12 mx-auto">
      <div className="bg-[#141414] p-6 rounded-lg shadow-lg w-full">
        <div className="flex gap-6 justify-between">
          {getRandomTrendingCoins(trendingCoins).map((coin, index) => (
            <Link
              key={index}
              to={`/coin/${coin.item.id}`}
              className="text-center"
            >
              <img
                src={coin.item.thumb}
                alt={coin.item.name}
                className="w-12 h-12 rounded-full mx-auto"
              />
              <p className="text-gray-400 text-sm">
                {coin.item.symbol.toUpperCase()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;
