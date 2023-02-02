import React from 'react';
import { useLocation } from 'react-router-dom';
import { FormSearch } from 'features/FormSearch';
import { Navigation } from '../Navigation';
import { BackBtn } from '../Button/BackBtn';
import styles from './Header.module.scss';

export const Header = () => {
  const location = useLocation().pathname;
  const isProductPage = location.startsWith('/product');

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        {isProductPage && <BackBtn />}
        {!isProductPage && <FormSearch />}
        <Navigation />
      </div>
    </div>
  );
};
