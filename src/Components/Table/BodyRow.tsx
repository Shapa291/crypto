import { IBodyRow } from "./Interfaces";
import BodyCell from "./BodyCell";

const BodyRow = ({ row, columns }: IBodyRow) => {
  return (
    <tr>
      {columns.map((key, index) => {
        return <BodyCell label={row[key]} key={index} />;
      })}
    </tr>
  );
};

export default BodyRow;
