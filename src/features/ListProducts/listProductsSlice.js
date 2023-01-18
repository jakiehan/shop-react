import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadProducts = createAsyncThunk(
  '@@products/load-products',
  (_, { extra: { client } }) => client.get('/item')
)

const initialState = {
  status: 'idle',
  error: null,
  list: []
}

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
        state.error = action.payload || action.error.message;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.status = 'received';
        state.list = action.payload.data.content;
      })
  }
})

export const productReducer = productSlice.reducer;

export const selectVisibleProducts = (state, search = '') => (
  state.products.list.filter(product => (
    product.name.toLowerCase().includes(search.toLowerCase())
  ))
)

export const selectAllProducts = state => state.products;

