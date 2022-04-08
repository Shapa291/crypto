import { FETCH_CURRENCY_LIST } from "../types";

const initialState = {
  coinsList: [],
};

export const fetchCurrencyListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CURRENCY_LIST:
      return { ...state, coinsList: action.payload };
    default:
      return state;
  }
};
