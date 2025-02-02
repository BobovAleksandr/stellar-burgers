import { RootState } from './store';
import { TIngredient } from '@utils-types';

export const selectIngredientsState = (state: RootState) =>
  state.ingredientsState;

export const selectConstructorState = (state: RootState) =>
  state.constructorState;
