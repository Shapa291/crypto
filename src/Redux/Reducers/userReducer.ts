import { LOG_IN_USER, LOG_OUT_USER } from "../types";

const initialState = {
  token: localStorage.getItem("token"),
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOG_IN_USER:
      return { ...state, token: action.payload };

    case LOG_OUT_USER:
        return{...state, token: null}
    default:
      return state;
  }
};
