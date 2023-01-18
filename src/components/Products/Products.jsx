import React from 'react';
import styles from './Products.module.scss';
import ListProducts from '../../features/ListProducts/ListProducts';

const Products = () => (
    <section className={styles.products}>
      <ListProducts />
    </section>
  );

export default Products;
