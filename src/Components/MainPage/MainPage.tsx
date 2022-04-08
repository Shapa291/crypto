import Chart from "../Chart/Chart";
import DownloadButton from "../DownloadButton/DownloadButton";
import Table from "../Table/Table";
import { columns } from "../../Configs/TableData";
import CustomSelect from "../CustomSelect/CustomSelect";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/rootReducer";

function MainPage() {

  const txt: string = ".json";

  const DataTypeCoinData = useSelector(
    (state: RootState) => state.fetchedCertainCoins.coinInfo
  );

  return (
    <div>
      <CustomSelect />
      <Chart />
      <Table columns={columns} data={DataTypeCoinData} />
      <DownloadButton text={txt} />
    </div>
  );
}

export default MainPage;
