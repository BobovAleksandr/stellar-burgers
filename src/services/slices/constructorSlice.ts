import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TConstructorIngredient } from '@utils-types';

type constructorState = {
  bun: TConstructorIngredient | null;
  ingredients: TConstructorIngredient[];
};

const initialState: constructorState = {
  bun: null,
  ingredients: []
};

const consctructorSlice = createSlice({
  name: 'consctructorSlice',
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<TConstructorIngredient>) => {
      if (action.payload.type === 'bun') {
        state.bun = action.payload;
      } else {
        state.ingredients.push(action.payload);
      }
    },
    deleteIngredient: (
      state,
      action: PayloadAction<TConstructorIngredient>
    ) => {
      state.ingredients = state.ingredients.filter(
        (ingredient) => ingredient.id !== action.payload.id
      );
    },
    clearConstructorData: (state) => {
      state.bun = null;
      state.ingredients = [];
    },
    moveIngredientDown: (
      state,
      action: PayloadAction<TConstructorIngredient>
    ) => {
      const currentIngredientIndex = state.ingredients.findIndex(
        (ingredient) => (ingredient.id = action.payload.id)
      );
      state.ingredients = state.ingredients
        .toSpliced(currentIngredientIndex, 1)
        .toSpliced(currentIngredientIndex + 1, 0, action.payload);
    },
    moveIngredientUp: (
      state,
      action: PayloadAction<TConstructorIngredient>
    ) => {
      const currentIngredientIndex = state.ingredients.findIndex(
        (ingredient) => (ingredient.id = action.payload.id)
      );
      state.ingredients = state.ingredients
        .toSpliced(currentIngredientIndex, 1)
        .toSpliced(currentIngredientIndex - 1, 0, action.payload);
    }
  }
});

export const {
  addIngredient,
  deleteIngredient,
  clearConstructorData,
  moveIngredientDown,
  moveIngredientUp
} = consctructorSlice.actions;

export default consctructorSlice;
