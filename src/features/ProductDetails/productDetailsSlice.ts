import { Axios } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { DetailsProduct, Status } from 'types';

export const loadDetailsInfo = createAsyncThunk<
  { data: { content: DetailsProduct } },
  string,
  { extra: { client: Axios }, rejectValue: string }
>('@@details/load-info',
  async(id, { extra: { client }, rejectWithValue }) => {
    try {
      return await client.get(`/item/${id}`);
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue('Unknown error');
    }
  }
);

type ProductDetails = {
  loading: Status;
  error: string | null;
  currentProduct: DetailsProduct | null;
};

const initialState: ProductDetails = {
  loading: false,
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
        state.loading = true;
        state.error = null;
      })
      .addCase(loadDetailsInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Data acquisition error';
      })
      .addCase(loadDetailsInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.currentProduct = action.payload.data.content;
      });
  },
});

export const { clearDetails } = productDetailsSlice.actions;
export const detailsReducer = productDetailsSlice.reducer;
