import { combineReducers } from "redux";
import { appReducer } from "./Reducers/appReducer";
import { fetchCertainCoinreducer } from "./Reducers/fetchCertainCoinsreducer";
import { fetchCurrencyListReducer } from "./Reducers/fetchCurrencyListReducer";
import { userReducer } from "./Reducers/userReducer";


export const rootReducer  = combineReducers ({
    fetchedCoins  : fetchCurrencyListReducer,
    fetchedCertainCoins : fetchCertainCoinreducer,
    app : appReducer,
    user :  userReducer,
})

export type RootState = ReturnType<typeof rootReducer>