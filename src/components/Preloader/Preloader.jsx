import React from 'react';
import styles from './Preloader.module.scss';

const Preloader = () => (
  <div className={styles.wrapper}>
    <span className={styles.loader} />
  </div>
);

export default Preloader;
