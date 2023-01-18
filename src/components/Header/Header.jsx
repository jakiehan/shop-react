import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import FormSearch from '../../features/FormSearch/FormSearch';
import styles from './Header.module.scss';

const Header = () => {
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
    )

}

export default Header;
