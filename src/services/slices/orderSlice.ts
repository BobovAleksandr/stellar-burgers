import { orderBurgerApi } from "@api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TOrder } from "@utils-types";

type orderState = {
  orderRequest: boolean;
  orderData: TOrder | null;
  name: string;
}

const initialState: orderState = {
  orderRequest: false,
  orderData: null,
  name: ''
}


export const fetchOrderBurger = createAsyncThunk(
  'user/fetchOrderBurger',
  async (data: string[]) => orderBurgerApi(data)
);

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderBurger.pending, (state) => {
        state.orderRequest = true;
      })
      .addCase(fetchOrderBurger.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.orderData = action.payload.order;
        state.name = action.payload.name;
      })
      .addCase(fetchOrderBurger.rejected, (state) => {
        state.orderRequest = false;
        console.log('Не удалось разместить заказ')
      })
  }
})

export default orderSlice;