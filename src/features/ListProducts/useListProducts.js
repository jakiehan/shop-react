import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from '../FormSearch/formSearchSlice';
import { loadProducts, selectAllProducts, selectVisibleProducts } from './listProductsSlice';

export const useListProducts = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch)
  const products = useSelector(state => selectVisibleProducts(state, search));
  const { status, error } = useSelector(selectAllProducts);

  useEffect(() => {
    if (!products.length) {
      dispatch(loadProducts());
    }
  }, []);

  return [products, { status, error }]
}
