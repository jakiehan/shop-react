import { Axios } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Product, Status } from 'types';

export const loadProducts = createAsyncThunk<
  { data: { content: Product[] } },
  undefined,
  { extra: { client: Axios } }
>('@@products/load-products',
  (_, { extra: { client } }) =>
  client.get('/item')
);

type ProductSlice = {
  status: Status;
  error: string | null;
  productData: Product[];
};

const initialState: ProductSlice = {
  status: 'idle',
  error: null,
  productData: [],
};

const productSlice = createSlice({
  name: '@@products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message || 'Data acquisition error';
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.status = 'received';
        state.productData = action.payload.data.content;
      });
  },
});

export const productReducer = productSlice.reducer;
