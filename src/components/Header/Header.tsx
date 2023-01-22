import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormSearch } from 'features/FormSearch';
import { Navigation } from '../Navigation';
import styles from './Header.module.scss';

export const Header = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        {location.startsWith('/product') ? (
          <button
            className={styles.backBtn}
            type="button"
            onClick={handleClick}
          >
            🠔 Back
          </button>
        ) : (
          <FormSearch />
        )}
        <Navigation />
      </div>
    </div>
  );
};
