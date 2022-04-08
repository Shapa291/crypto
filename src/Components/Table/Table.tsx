import "./Table.scss";
import HeadCell from "./HeadCell";
import BodyRow from "./BodyRow";
import { IData } from "./Interfaces";

function Table({ columns, data }: IData) {

  const tableRows = data ? data : []

  const columnTypes = columns.map((item) => {
    return item.key;
  });

  return (
    <>
      <div className="tableDiv">
        <table className="table">
          <thead>
            <tr>
              {columns.map((item, index) => {
                return <HeadCell label={item.label} key={index} />;
              })}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((item: object, index: string | number) => {              
              return <BodyRow row={item} columns={columnTypes} key={index} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
