export interface IHeadCell {
    label : string;
}

export interface IBodyCell {
    label : string | number | Date;
}

export interface IBodyRow {
    row : any,
    columns : string[],
    key : string | number
}
interface IField {
    key : string,
    label : string
}

export interface IData {
    columns : Array<IField> ,
    data : Array<object>
}
