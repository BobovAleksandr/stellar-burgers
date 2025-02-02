import { combineReducers } from '@reduxjs/toolkit';
import ingredientsSliceReducer from './slices/ingredientsSlice';

const rootReducer = combineReducers({
  ingredientsState: ingredientsSliceReducer
});

export default rootReducer;
