import {
  GetCertainCoinByType,
  GetCoinsTypesWhichAreAvailable,
} from "../API/CertainCoinInfo";
import {
  FETCH_CURRENCY_LIST,
  GET_CERTAIN_COIN_INFO,
  GET_COINS_TYPES,
  HIDE_LOADER,
  LOG_IN_USER,
  LOG_OUT_USER,
  SHOW_LOADER,
} from "./types";

const LocalHostURL = "http://localhost:8080/List/";

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}
export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function fetchCurrencyList() {
  return async (dispatch: Function) => {
    dispatch({ type: SHOW_LOADER });

    const response = await fetch(LocalHostURL);
    const jsonWithList = await response.json();

    dispatch({ type: HIDE_LOADER });
    dispatch({ type: FETCH_CURRENCY_LIST, payload: jsonWithList });
  };
}

export function fetchCoinsTypes() {
  return async (dispatch: Function) => {
    const response = await GetCoinsTypesWhichAreAvailable();
    const types = response.data;
    dispatch({ type: GET_COINS_TYPES, payload: types });
  };
}

export function fetchCertainCoinByType(type: string) {
  return async (dispatch: Function) => {
    const response = await GetCertainCoinByType(type);
    const coinInfo = response.data;
    dispatch({ type: GET_CERTAIN_COIN_INFO, payload: coinInfo });
  };
}

export function logInUser(tokenAccess: any) {
  return function (dispatch: Function) {
    localStorage.setItem("token", tokenAccess);
    const token = localStorage.getItem("token");
    dispatch({ type: LOG_IN_USER, payload: token });
  };
}

export function logOutUser() {
  return {
    type: LOG_OUT_USER,
  };
}
