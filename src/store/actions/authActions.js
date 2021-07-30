import axios from "axios";
import {
  GET_COIN_LIST,
  GET_COIN_LIST_ERROR,
  GET_COIN_LIST_STARTED,
  //
  GET_COIN_LIST_PROCENT,
  GET_COIN_LIST_PROCENT_ERROR,
  GET_COIN_LIST_PROCENT_STARTED,
} from "../reducers/authReducer";

export const getCoinListProcentEror = (err) => ({
  type: GET_COIN_LIST_PROCENT_ERROR,
  payload: err,
});
export const getCoinListProcentStarted = () => ({
  type: GET_COIN_LIST_PROCENT_STARTED,
});
export const getCoinListProcentFinished = (data) => ({
  type: GET_COIN_LIST_PROCENT,
  payload: data,
});
// ////////////
export const getCoinListError = (err) => ({
  type: GET_COIN_LIST_ERROR,
  payload: err,
});
export const getCoinListStarted = () => ({ type: GET_COIN_LIST_STARTED });
export const getCoinListFinished = (data) => ({
  type: GET_COIN_LIST,
  payload: data,
});

export const getCoinList = () => async (dispatch) => {
  const coinUrl = "https://api.coingecko.com/api/v3/coins";

  try {
    dispatch(getCoinListStarted());

    const { data } = await axios.get(coinUrl);

    dispatch(getCoinListFinished(data));
  } catch (err) {
    dispatch(getCoinListError(err.message));
  }
};

export const getCoinProcent = () => async (dispatch) => {
  const coinsProcentUrl = "https://api.coingecko.com/api/v3/global";

  try {
    dispatch(getCoinListProcentStarted());

    const { data } = await axios.get(coinsProcentUrl);

    const coinProcent = data.data.market_cap_change_percentage_24h_usd;

    dispatch(getCoinListProcentFinished(coinProcent));
  } catch (err) {
    dispatch(getCoinListProcentEror(err.message));
  }
};
