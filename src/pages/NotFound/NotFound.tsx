import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

export const NotFound = () => (
  <div className={styles.container}>
    <p className={styles.text}>Not Found...</p>
    <Link
      className={styles.link}
      to="/"
    >
      Go main page
    </Link>
  </div>
);
