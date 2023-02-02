import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { client } from './api/axiosConfig';
import { productReducer } from './features/ListProducts/listProductsSlice';
import { searchReducer } from './features/FormSearch/formSearchSlice';
import { detailsReducer } from './features/ProductDetails/productDetailsSlice';
import { counterReducer } from './features/PriceCounter/priceCounterSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    search: searchReducer,
    details: detailsReducer,
    counter: counterReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
       client,
      }
    },
    serializableCheck: false,
  })
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
