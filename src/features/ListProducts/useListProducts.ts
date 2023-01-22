import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { Product } from 'types';
import { RootState, useAppDispatch } from 'store';
import { selectVisibleProducts, selectAllProducts } from './listProductsSelect';
import { selectSearch } from '../FormSearch/formSearchSelect';
import { loadProducts } from './listProductsSlice';

export const useListProducts = (): [Product[], { status: string; error: string | null }] => {

  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);
  const products = useSelector((state:RootState) => selectVisibleProducts(state, search));

  const { status, error } = useSelector(selectAllProducts);

  useEffect(() => {
    if (!products.length) {
      dispatch(loadProducts());
    }
  }, []);

  return [products, { status, error }];
};
