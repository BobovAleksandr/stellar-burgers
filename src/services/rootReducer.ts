import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsSlice } from './slices/ingredientsSlice';

const rootReducer = combineReducers({
  ingredients: ingredientsSlice.reducer
});

export default rootReducer;
