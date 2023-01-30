import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BackBtn.module.scss';

export const BackBtn = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  return (
    <button
      className={styles.backBtn}
      type="button"
      onClick={handleClick}
    >
      🠔 Back
    </button>
  );
};


