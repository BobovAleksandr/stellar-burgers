import { RootState } from './store';
import { TIngredient } from '@utils-types';

export const selectIngredientsState = (state: RootState) =>
  state.ingredientsState;

export const selectIngredients = (state: RootState) =>
  state.ingredientsState.ingredients;

export const selectConstructorState = (state: RootState) =>
  state.constructorState;

export const selectFeeds = (state: RootState) => state.feedsState;
