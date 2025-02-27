import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import CoinItem from "../../components/CoinItem";
import Loader from "../../components/Loader";
import { IoIosSearch as Search } from "react-icons/io";
import api, { baseTrendURL } from "../../utils/api";
import TrendingCoins from "../../components/TrendingCoins";

const Home = () => {
  const { allCoin } = useContext(CoinContext);
  const [loading, setLoading] = useState(true);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    api
      .get(baseTrendURL)
      .then((response) => setTrendingCoins(response.data.coins))
      .catch((error) =>
        console.error("Trend coinler alınırken hata oluştu:", error)
      );
  }, []);

  useEffect(() => {
    if (allCoin.length > 0) {
      setDisplayCoin(allCoin);
      setLoading(false);
    }
  }, [allCoin]);

  const searchHandler = (e) => {
    e.preventDefault();
    const filteredCoins = allCoin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(filteredCoins);
    setIsSearching(true);
  };
  return (
    <div
      className={`${
        isSearching ? "h-screen" : "h-full"
      } px-4 transition-all duration-300`}
    >
      <div className="pt-4 max-w-2xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold leading-tight text-center">
          Largest <br /> Crypto Marketplace
        </h1>
        <p className="w-3/4 text-[#e3e3e3] leading-7 text-center">
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>

        <form
          onSubmit={searchHandler}
          className="flex w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden"
        >
          <input
            type="text"
            className="flex-1 px-4 py-2 text-base border-none text-black"
            placeholder="Search crypto ..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            list="coinlist"
          />
          <datalist id="coinlist">
            {allCoin.map((item, key) => (
              <option key={key}>{item.name}</option>
            ))}
          </datalist>
          <button
            type="submit"
            className="bg-[#7927ff] px-5 py-2 hover:opacity-90"
          >
            <Search className="text-2xl font-bold" />
          </button>
        </form>

        {trendingCoins.length > 0 && (
          <TrendingCoins
            trendingCoins={trendingCoins}
            getRandomTrendingCoins={(coins) => coins.slice(0, 5)}
          />
        )}
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-4xl mx-auto bg-[#141414] rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-3 md:grid-cols-[0.5fr_2fr_1fr_1fr] p-4 bg-[#222] font-semibold">
            <p>#</p>
            <p>Coins</p>
            <p className="text-center">Price</p>
            <p className="hidden md:block text-right">24H Change</p>
          </div>
          {displayCoin.map((item, key) => (
            <CoinItem key={key} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
