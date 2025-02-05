import { RootState } from './store';

export const selectIngredientsLoadingStatus = (state: RootState) =>
  state.ingredients.isLoading;

export const selectIngredients = (state: RootState) =>
  state.ingredients.ingredients;

/* Нужны более точечные селеторы */
export const selectConstructorState = (state: RootState) =>
  state.constructor;

export const selectFeedState = (state: RootState) => state.feeds;
export const selectOrders = (state: RootState) => state.feeds.orders;
export const selectOrder = (state: RootState) => state.feeds.selectedOrder;
