import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadDetailsInfo = createAsyncThunk(
  '@@details/load-info',
  (id, { extra: { client } }) => client.get(`/item/${id}`)
)

const initialState = {
  status: 'idle',
  error: null,
  currentProduct: null
}

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
        state.error = action.payload || action.error.message;
      })
      .addCase(loadDetailsInfo.fulfilled, (state, action) => {
        state.status = 'received';
        state.currentProduct = action.payload.data.content;
      })
  }
})

export const { clearDetails } = productDetailsSlice.actions;
export const detailsReducer = productDetailsSlice.reducer;

export const selectDetails = state => state.details;
