import { GET_CERTAIN_COIN_INFO, GET_COINS_TYPES } from "../types";

const initialState = {
  coinTypes: [],
  coinInfo: [],
};

export const fetchCertainCoinreducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_COINS_TYPES:
      return { ...state, coinTypes: action.payload };

    case GET_CERTAIN_COIN_INFO:
      return { ...state, coinInfo: action.payload };
    default:
      return state;
  }
};
