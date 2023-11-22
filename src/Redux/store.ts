import { createStore } from "redux";
import cryptoPricesReducer from "./cryptoPricesReducer";

const store = createStore(cryptoPricesReducer);

export default store;
