import { IHeadCell } from "./Interfaces";

const HeadCell = ({ label }: IHeadCell) => {
  return <th>{label}</th>;
};

export default HeadCell;
