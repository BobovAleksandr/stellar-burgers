import { combineReducers } from '@reduxjs/toolkit';
import ingredientsSliceReducer from './slices/ingredientsSlice';
import constructorSliceRrducer from './slices/constructorSlice';

const rootReducer = combineReducers({
  ingredientsState: ingredientsSliceReducer,
  constructorState: constructorSliceRrducer
});

export default rootReducer;
