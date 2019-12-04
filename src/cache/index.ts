import localforage from "localforage";

export default class CacheManager {
  writeData = (key: string, data: {}) => localforage.setItem(key, data);

  readData = (key: string) => localforage.getItem(key);
}