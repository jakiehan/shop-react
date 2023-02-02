import React from 'react';
import styles from './Preloader.module.scss';

export const Preloader = () => (
  <div className={styles.wrapper}>
    <span className={styles.loader} />
  </div>
);
