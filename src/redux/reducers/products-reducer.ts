import CacheManager from "../../cache";
import { PRODUCT_ACTIONS, STATE_ACTIONS } from "../actions/actionTypes/types";
import _ from "lodash";

const cache = new CacheManager();

export const initialState = {
  areProductsFetched: false,
  products: []
};

const productsReducer = (state = initialState, action: any) => {
  let newState;
  switch (action.type) {
    case PRODUCT_ACTIONS.ADD_ALL_PRODUCTS:
      newState = {
        ...state,
        products: action.products,
        areProductsFetched: true
      };
      cache.writeData("products", newState);
      console.log(`fetched from API`);
      return newState;
    case STATE_ACTIONS.REFRESH_STATE:
      console.log(`fetched from DB`);
      if (_.isNull(action.state)) {
        newState = {
          ...initialState,
          areProductsFetched: true
        };
      } else {
        newState = {
          ...action.state,
          areProductsFetched: true
        };
      }
      return newState;
    default:
      return state;
  }
};

export default productsReducer;
