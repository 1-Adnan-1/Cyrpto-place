import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const Detail = () => {
  const { coinId } = useParams();
  const { currency } = useContext(CoinContext);
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchCoinDetail = () => {
    api
      .get(`/coins/${coinId}`)
      .then((res) => setCoinData(res.data))
      .catch((err) => {
        setError(true);
        console.log("API Hatası:", err);
      });
  };

  const fetchCoinHistoricalData = () => {
    api
      .get(`/coins/${coinId}/market_chart`, {
        params: {
          vs_currency: currency.name,
          days: 10,
        },
      })
      .then((res) => setHistoricalData(res.data))
      .catch((err) => {
        setError(true);
        console.log("API Hatası:", err);
      });
  };

  useEffect(() => {
    fetchCoinDetail();
    fetchCoinHistoricalData();
  }, [coinId, currency]);

  useEffect(() => {
    if (coinData && historicalData) {
      setLoading(false);
    }
  }, [coinData, historicalData]);

  if (error) {
    return <Error message="API hatası istediğiniz veriler api'de bulunmuyor" />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`px-5 py-5 ${!loading ? "" : ""}`}>
      <div className="flex flex-col items-center gap-5 my-0 mb-6 mx-auto">
        <img
          src={coinData?.image.large}
          className="max-w-[120px] mt-4 drop-shadow-lg"
          alt="coin-image"
        />
        <p className="text-4xl font-bold text-[#ffcc00]">
          {coinData?.name} ({coinData?.symbol.toUpperCase()})
        </p>
      </div>
      <div className="max-w-[700px] h-[300px] mx-auto shadow-md">
        <LineChart historicalData={historicalData} />
      </div>

      <div className="max-w-[700px] mx-auto my-12 flex flex-col bg-[#121236] p-6 rounded-lg shadow-md">
        {[
          { label: "Piyasa Sıralaması", value: coinData?.market_cap_rank },
          {
            label: "Güncel Fiyat",
            value: `${currency.symbol}${coinData?.market_data.current_price[
              currency.name
            ].toLocaleString()}`,
          },
          {
            label: "Piyasa Değeri",
            value: `${currency.symbol}${coinData?.market_data.market_cap[
              currency.name
            ].toLocaleString()}`,
          },
          {
            label: "24 Saatlik En Yüksek",
            value: `${currency.symbol}${coinData?.market_data.high_24h[
              currency.name
            ].toLocaleString()}`,
          },
          {
            label: "24 Saatlik En Düşük",
            value: `${currency.symbol}${coinData?.market_data.low_24h[
              currency.name
            ].toLocaleString()}`,
          },
        ].map((item, key) => (
          <ul
            className="flex justify-between py-3 border-b border-[#5f5d5f]"
            key={key}
          >
            <li className="font-semibold text-[#ffcc00]">{item.label} </li>
            <li className="font-light">{item.value}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Detail;
