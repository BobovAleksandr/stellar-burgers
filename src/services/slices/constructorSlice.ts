import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TIngredient, TOrder } from '@utils-types';

type constructorState = {
  bun: TIngredient | null;
  ingredients: TIngredient[];
};

const initialState: constructorState = {
  bun: null,
  ingredients: []
};

const consctructorSlice = createSlice({
  name: 'consctructorSlice',
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<TIngredient>) => {
      if (action.payload.type === 'bun') {
        state.bun = action.payload;
      } else {
        state.ingredients.push(action.payload);
      }
    },
    deleteIngredient: (state, action: PayloadAction<TIngredient>) => {
      if (action.payload.type === 'bun') {
        state.bun = null;
      } else {
        state.ingredients.filter(
          (ingredient) => ingredient._id !== action.payload._id
        );
      }
    }
  }
});

export default consctructorSlice;
