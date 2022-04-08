import "./Chart.scss";
import * as V from "victory";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/rootReducer";

const Chart = () => {
  const coinInfo = useSelector(
    (state: RootState) => state.fetchedCertainCoins.coinInfo
  );
  const dataForChart = coinInfo.map((item : any ) => {
    return {x : item.createdAt, y: item.price}
  })
  
  return (
    <div className="chartDiv">
      <V.VictoryChart 
      theme={V.VictoryTheme.material}
      width={550}
      height={300}
      containerComponent={
        <V.VictoryZoomContainer 
          responsive={true}
          zoomDimension="x"  
        />
      }
      >
        <V.VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" },
          }}
          data={dataForChart}
        ></V.VictoryLine>
      </V.VictoryChart>
    </div>
  );
};

export default Chart;
