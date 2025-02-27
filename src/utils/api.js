import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-mCetqGsCFoJDkZrsrk6oohfR",
  },
});

export const baseTrendURL = "search/trending";

export default api;
