import { IBodyCell } from "./Interfaces";

const BodyCell = ({ label }: IBodyCell) => {
  if (!label) label = "";
  return <td>{label}</td>;
};

export default BodyCell;
