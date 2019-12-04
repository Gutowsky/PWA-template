import productsReducer from "./products-reducer";
import quotesRecuder from "./quotes-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productsStore: productsReducer,
  quotesStore: quotesRecuder
});

export default rootReducer;
