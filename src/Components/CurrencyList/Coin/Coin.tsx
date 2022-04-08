import "./Coin.scss";
import { ICoinData } from "./Interfaces";

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}: ICoinData) => {
  return (
    <div className="coinContainer">
      <div className="coinRow">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coinSymbol">{symbol}</p>
        </div>
        <div className="coinData">
          <p className="coinPrice">${price}</p>
          <p className="coinVolume">${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coinPerc red">{priceChange}%</p>
          ) : (
            <p className="coinPerc green">{priceChange}%</p>
          )}
          <p className="cointMrtkCap">MKT cap: ${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
