import { useEffect } from "react";
import "./CustomSelect.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/rootReducer";
import { fetchCertainCoinByType, fetchCoinsTypes } from "../../Redux/actions";

const CustomSelect = () => {
  const dispatch = useDispatch();
  const typesOfCoinsList = useSelector(
    (state: RootState) => state.fetchedCertainCoins.coinTypes
  );

  useEffect(() => {
    dispatch(fetchCoinsTypes());
  }, [dispatch]);

  const selectHandle = (event: { target: { value: any } }) => {
    dispatch(fetchCertainCoinByType(event.target.value));
  };
  
  const dataForMap = typesOfCoinsList? typesOfCoinsList : []
  console.log(dataForMap);

  return (
    <div className="customSelect">
      <select name="" id="select" onChange={selectHandle}>
        {dataForMap.map((item: any, index: any) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
