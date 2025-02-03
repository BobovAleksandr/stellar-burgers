import { RootState } from './store';

export const selectIngredientsState = (state: RootState) =>
  state.ingredientsState;

export const selectIngredients = (state: RootState) =>
  state.ingredientsState.ingredients;

export const selectConstructorState = (state: RootState) =>
  state.constructorState;

export const selectFeedState = (state: RootState) => state.feedsState;
export const selectOrders = (state: RootState) => state.feedsState.orders;
export const selectOrder = (state: RootState) => state.feedsState.selectedOrder;
