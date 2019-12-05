import productsReducer from "./products_reducer";
import quotesRecuder from "./quotes_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productsStore: productsReducer,
  quotesStore: quotesRecuder
});

export default rootReducer;
