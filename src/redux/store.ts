import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  compose(
    composeEnhancers(applyMiddleware())
  )
);

export default store;