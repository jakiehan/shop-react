import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
}

const formSearchSlice = createSlice({
  name: '@@search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  }
})

export const { setSearch } = formSearchSlice.actions;
export const searchReducer = formSearchSlice.reducer;

export const selectSearch = state => state.search.search;