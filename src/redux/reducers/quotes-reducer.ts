import CacheManager from "../../cache";
import { PRODUCT_ACTIONS, STATE_ACTIONS } from "../actions/actionTypes/types";
import _ from "lodash";

const cache = new CacheManager();

export const initialState = {
  quotes: []
};

const quotesReducer = (state = initialState, action: any) => {
  let newState;
  switch (action.type) {
    case PRODUCT_ACTIONS.ADD_PRODUCT:
      newState = {
        ...state,
        quotes: [..._.get(state, "quotes", []), action.product]
      };
      cache.writeData("quotes", newState);
      return newState;
    case STATE_ACTIONS.REFRESH_CASE:
      console.log(`Case fetched from DB`);
      if (_.isNull(action.state)) {
        newState = {
          ...initialState
        };
      } else {
        newState = {
          ...action.state
        };
      }
      return newState;
    default:
      return state;
  }
};

export default quotesReducer;
