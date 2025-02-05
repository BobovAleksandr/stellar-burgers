import { RootState } from './store';

// ingrediants selectors
export const selectIngredientsLoadingStatus = (state: RootState) =>
  state.ingredients.isLoading;
export const selectIngredients = (state: RootState) =>
  state.ingredients.ingredients;

// feed selectors
export const selectFeedState = (state: RootState) => state.feeds;
export const selectOrders = (state: RootState) => state.feeds.orders;
export const selectOrder = (state: RootState) => state.feeds.selectedOrder;

/* Нужны более точечные селеторы для конструктора */
export const selectConstructorState = (state: RootState) => state.constructor;

// user selectors
export const selectUser = (state: RootState) => state.user.user;
export const selectUserProgressCheck = (state: RootState) =>
  state.user.isUserCheckInProgress;
