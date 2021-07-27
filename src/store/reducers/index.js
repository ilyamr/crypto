// import { useEffect } from "react";

import { GET_CRYPTO_API } from "../ations";

const initialState = {
  defaultArray: [],
};

export const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CRYPTO_API:
      return type;
    //   break;

    default:
      break;
  }
};
