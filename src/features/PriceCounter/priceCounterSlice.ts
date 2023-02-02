import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PriceCounter = {
  price: number | null,
  sumPrice: number | null,
  num: number,
}

const initialState: PriceCounter = {
  price: null,
  sumPrice: null,
  num: 1,
};

const priceCounterSlice = createSlice({
  name: '@@price-counter',
  initialState,
  reducers: {
    setPrice: (state, action:PayloadAction<number>) => {
      state.price = action.payload;
      state.sumPrice = action.payload;
    },
    decrement: (state) => {
      if (state.sumPrice && state.price) {
        state.num -= 1;
        state.sumPrice -= state.price;
      }
    },
    increment: (state) => {
      if (state.sumPrice && state.price) {
        state.num += 1;
        state.sumPrice += state.price;
      }
    },
    resetCounter: () => initialState,
  }
});

export const { setPrice, decrement, increment, resetCounter } = priceCounterSlice.actions;
export const counterReducer = priceCounterSlice.reducer;
