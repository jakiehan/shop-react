import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FormSearchSlice = {
  search: string;
};

const initialState: FormSearchSlice = {
  search: '',
};

const formSearchSlice = createSlice({
  name: '@@search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = formSearchSlice.actions;
export const searchReducer = formSearchSlice.reducer;
