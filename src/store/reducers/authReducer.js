export const GET_COIN_LIST = "get_coin_list";
export const GET_COIN_LIST_ERROR = "get_coin_list_error";
export const GET_COIN_LIST_STARTED = "get_coin_list_started";

export const GET_COIN_LIST_PROCENT = "get_coin_list_procent";
export const GET_COIN_LIST_PROCENT_ERROR = "get_coin_list_procent_error";
export const GET_COIN_LIST_PROCENT_STARTED = "get_coin_list_procent_started";

const initialState = {
  coinList: [],
  coinProcent: [],
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COIN_LIST:
      return { ...state, coinList: payload };
    //
    case GET_COIN_LIST_PROCENT:
      return { ...state, coinProcent: payload };

    default:
      return state;
  }
};

export default authReducer;
