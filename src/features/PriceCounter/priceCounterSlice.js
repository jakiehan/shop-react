import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  price: null,
  sumPrice: null,
  num: 1,
};

const priceCounterSlice = createSlice({
  name: '@@price-counter',
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload;
      state.sumPrice = action.payload;
    },
    decrement: (state) => {
      state.num -= 1;
      state.sumPrice -= state.price;
    },
    increment: (state) => {
      state.num += 1;
      state.sumPrice += state.price;
    },
    resetCounter: () => initialState,
  }
});

export const { setPrice, decrement, increment, resetCounter } = priceCounterSlice.actions;
export const counterReducer = priceCounterSlice.reducer;

export const selectPriceCounter = state => state.counter;
