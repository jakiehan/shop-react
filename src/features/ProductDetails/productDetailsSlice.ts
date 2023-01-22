import { Axios } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { DetailsProduct, Status } from 'types';

export const loadDetailsInfo = createAsyncThunk<
  { data: { content: DetailsProduct } },
  string,
  { extra: { client: Axios } }
>('@@details/load-info',
  (id, { extra: { client } }) =>
  client.get(`/item/${id}`)
);

type ProductDetails = {
  status: Status;
  error: string | null;
  currentProduct: DetailsProduct | null;
};

const initialState: ProductDetails = {
  status: 'idle',
  error: null,
  currentProduct: null,
};

const productDetailsSlice = createSlice({
  name: '@@details',
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadDetailsInfo.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadDetailsInfo.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message || 'Data acquisition error';
      })
      .addCase(loadDetailsInfo.fulfilled, (state, action) => {
        state.status = 'received';
        state.currentProduct = action.payload.data.content;
      });
  },
});

export const { clearDetails } = productDetailsSlice.actions;
export const detailsReducer = productDetailsSlice.reducer;
