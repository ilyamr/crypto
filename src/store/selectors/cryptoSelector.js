import { createSelector } from "reselect";

export const selectState = (state) => state.auth;

export const cryptoApi = createSelector(
  selectState,
  (cryptoApi) => cryptoApi.coinList
);

export const cryptoProcent = createSelector(
  selectState,
  (cryptoApi) => cryptoApi.coinProcent
);
