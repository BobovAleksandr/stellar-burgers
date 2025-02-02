import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TIngredient, TOrder } from '@utils-types';

type burgerConstructorState = {
  bun: TIngredient | null;
  ingredients: TIngredient[];
};

const initialState: burgerConstructorState = {
  bun: null,
  ingredients: []
};

const orderSlice = createSlice({
  name: 'orderSlice',
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

export default orderSlice.reducer;
