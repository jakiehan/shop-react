import { Axios } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Product, Status } from 'types';

export const loadProducts = createAsyncThunk<
  { data: { content: Product[] } },
  undefined,
  { extra: { client: Axios }, rejectValue: string }
>(
  '@@products/load-products',
  async (_, { extra: { client }, rejectWithValue }) => {
    try {
      return await client.get('/item');
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue('Unknown error');
    }
  }
);

type ProductSlice = {
  loading: Status;
  loaded: Status;
  error: string | null;
  productData: Product[];
};

const initialState: ProductSlice = {
  loading: false,
  loaded: false,
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
        state.loading = true;
        state.loaded = false;
        state.error = null;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.error = action.payload || 'Data acquisition error';
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.productData = action.payload.data.content;
      });
  },
});

export const productReducer = productSlice.reducer;
