import type { RootState } from 'store';

export const selectVisibleProducts = (state: RootState, search = '') => {
  const listProducts = state.products.productData;

  return listProducts.filter(product => (
    product.name.toLowerCase().includes(search.toLowerCase())
  ))
}

export const selectAllProducts = (state: RootState) => state.products;