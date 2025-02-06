import { ActionCreatorWithPayload, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient, TOrder } from '@utils-types';

type constructorState = {
  bun: TIngredient | null;
  ingredients: TIngredient[];
};

const initialState: constructorState = {
  bun: null,
  ingredients: [],
};

const consctructorSlice = createSlice({
  name: 'consctructorSlice',
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<TIngredient>) => {
      if (action.payload.type === 'bun') {
        state.bun = action.payload;
      } else {
        const ingredient = action.payload;
        // ingredient.id = String(state.ingredients.length);
        state.ingredients.push(ingredient);
      }
    },
    deleteIngredient: (state, action: PayloadAction<TConstructorIngredient>) => {
      state.ingredients = state.ingredients.filter((ingredient) => ingredient._id !== action.payload.id);
    },
    clearConstructorData: (state) => {
      state.bun = null;
      state.ingredients = [];
    },
  }
});

export const { addIngredient, deleteIngredient, clearConstructorData } = consctructorSlice.actions;

export default consctructorSlice;
