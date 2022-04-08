import { SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencyList } from "../../Redux/actions";
import { RootState } from "../../Redux/rootReducer";
import Loader from "../Loader/Loader";
import Coin from "./Coin/Coin";
import "./CurrencyList.scss";
import { ICoin } from "./Interfaces";

function CurrencyList() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const coinsList = useSelector(
    (state: RootState) => state.fetchedCoins.coinsList
  );
  const loadingState = useSelector((state: RootState) => state.app.loading);
  useEffect(() => {
    dispatch(fetchCurrencyList());
  }, [dispatch]);

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coinsList.filter((coin: ICoin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  if (loadingState) return <Loader />;

  return (
    <div className="coinCurrency">
      <div className="coinSearch">
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coinInput"
            onChange={handleSearch}
          />
        </form>
      </div>
      {filteredCoins.map((coin: ICoin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.mkt_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default CurrencyList;
