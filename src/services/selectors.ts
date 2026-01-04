import { RootState } from './store';

// ingrediants selectors
export const selectIngredientsLoadingStatus = (state: RootState) =>
  state.ingredients.isLoading;
export const selectIngredients = (state: RootState) =>
  state.ingredients.ingredients;

// orders & feed selectors
export const selectFeedState = (state: RootState) => state.orders;
export const selectFeeds = (state: RootState) => state.orders.feeds;
export const selectOrders = (state: RootState) => state.orders.orders;
export const selectOrder = (state: RootState) => state.orders.selectedOrder;

// constructor selectors
export const selectConstructorIems = (state: RootState) =>
  state.consctructorSlice;

// user selectors
export const selectUser = (state: RootState) => state.user.user;
export const selectUserProgressCheck = (state: RootState) =>
  state.user.isUserCheckInProgress;
export const selectError = (state: RootState) => state.user.error;

// order selectors
export const selectOrderRequest = (state: RootState) =>
  state.orderSlice.orderRequest;
export const selectOrderData = (state: RootState) => state.orderSlice.orderData;

export const selectOrderIngredients = (state: RootState) =>
  state.orderSlice.orderIngredients;
