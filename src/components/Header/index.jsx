import { Link, NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CoinContext } from "../../context/CoinContext";
import AuthButtons from "../Auth";
import { auth } from "../../firebase";

const Header = ({ changeTheme, theme }) => {
  const { setCurrency } = useContext(CoinContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const currencyHandler = (e) => {
    const selectedCurrency = e.target.value;
    setCurrency({
      name: selectedCurrency,
      symbol: selectedCurrency === "usd" ? "$" : "€",
    });
  };

  return (
    <header className="flex items-center justify-between px-[10%] py-5 border-b-2 border-[#3c3c3c] ">
      <Link to="/">
        <img
          src="/logo.png"
          className="min-w-[90px] w-[max(12vw,120px)]"
          alt="logo"
        />
      </Link>

      <ul className="hidden md:flex gap-10 ml-[50px] lg:ml-0">
        <NavLink
          to="/"
          className="cursor-pointer hover:text-[#ffde4d] transition"
        >
          Home
        </NavLink>
        <NavLink
          to="/features"
          className="cursor-pointer hover:text-[#ffde4d] transition"
        >
          Features
        </NavLink>
        <NavLink
          to="/pricing"
          className="cursor-pointer hover:text-[#ffde4d] transition"
        >
          Pricing
        </NavLink>
        <NavLink
          to="/blog"
          className="cursor-pointer hover:text-[#ffde4d] transition"
        >
          Blog
        </NavLink>
      </ul>

      <div className="flex items-center gap-3 px-5 md:px-8 lg:px-0">
        <select
          onChange={(e) => changeTheme(e.target.value)}
          value={theme}
          className="p-[5px_8px] rounded-md border-2 border-white bg-transparent"
        >
          <option value="gradient">Theme</option>
          <option value="light-dark">Theme</option>
          <option value="dark-light">Theme</option>
        </select>

        <select
          onChange={currencyHandler}
          className="p-[5px_8px] rounded-md border-2 border-white bg-transparent"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>

        <AuthButtons user={user} />
      </div>
    </header>
  );
};

export default Header;
