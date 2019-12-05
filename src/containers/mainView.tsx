import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CacheManager from "../cache";
import { refreshState, addAllProducts } from "../redux/actions/actionCreators";
import { isConnectonOnline } from "../shared/utils/checkConnectionStatus";
import api from "../shared/utils/api";

const MainView: React.FC = () => {
  const dispatch = useDispatch();

  const fetchState = async () => {
    const cache = new CacheManager();
    const oldState = await cache.readData("products");
    dispatch(refreshState(oldState));
  };

  const fetchProducts = async () => {
    const result = await api.get("/api/products");
    const productList = result.data;
    dispatch(addAllProducts(productList));
  };

  useEffect(() => {
    isConnectonOnline() ? fetchProducts() : fetchState();
  });

  return <h1>We are fetching data now. Check localStorage</h1>;
};

export default React.memo(MainView);
