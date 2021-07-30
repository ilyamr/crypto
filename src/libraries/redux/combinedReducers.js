import { combineReducers } from "redux";

import * as restReducers from "../../store/reducers";

const reducers = {
  ...restReducers,
};

export default combineReducers(reducers);
