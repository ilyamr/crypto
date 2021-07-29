import { createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import createMiddleware from "./middleware";
import combinedReducers from "./combinedReducers";

const persistConfig = { key: "root", storage, blacklist: ["form"] };
const middleware = createMiddleware(thunkMiddleware);
const persistedReducer = persistReducer(persistConfig, combinedReducers);

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialState) => {
  const store = createStore(persistedReducer, initialState, middleware);
  const persistor = persistStore(store);
  return { store, persistor };
};
