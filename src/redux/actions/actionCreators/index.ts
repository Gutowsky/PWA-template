import { PRODUCT_ACTIONS, STATE_ACTIONS } from "../actionTypes/index.types";

export const addProduct = (product: any) => ({
  type: PRODUCT_ACTIONS.ADD_PRODUCT,
  product
});

export const addAllProducts = (products: any) => ({
  type: PRODUCT_ACTIONS.ADD_ALL_PRODUCTS,
  products
});

export const refreshState = (state: any) => ({
  type: STATE_ACTIONS.REFRESH_STATE,
  state
});

export const refreshCase = (state: any) => ({
  type: STATE_ACTIONS.REFRESH_CASE,
  state
});
