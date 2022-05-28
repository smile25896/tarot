import rootReducer from "../reducers";
import { configureStore } from "@reduxjs/toolkit";

const configure = () => {
  const store = configureStore({ reducer: rootReducer });
  return store;
};

export default configure;
