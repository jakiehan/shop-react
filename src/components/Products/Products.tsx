import React from 'react';
import { ListProducts } from 'features/ListProducts';
import styles from './Products.module.scss';

export const Products = () => (
  <section className={styles.products}>
    <ListProducts />
  </section>
);
