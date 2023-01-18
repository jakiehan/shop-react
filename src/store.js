import { configureStore } from '@reduxjs/toolkit';
import { client } from './api/axiosConfig';
import { productReducer } from './features/ListProducts/listProductsSlice';
import { searchReducer } from './features/FormSearch/formSearchSlice';
import { detailsReducer } from './features/ProductDetails/productDetailsSlice';
import { counterReducer } from './features/PriceCounter/priceCounterSlice';

export default configureStore({
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