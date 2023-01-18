import React from 'react';
import styles from './CounterBtn.module.scss';

const CounterBtn = ({ value, type = '', onClick, isDisabled }) => (
  <button
    className={type === 'add' ? `${styles.btn} ${styles.btnAdd}` : `${styles.btn} ${styles.btnCounter}`}
    aria-label={`button ${value}`}
    type="button"
    onClick={onClick}
    disabled={isDisabled}
  >
    {value}
  </button>
  );

export default CounterBtn;
