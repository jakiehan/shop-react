import React from 'react';
import styles from './CounterBtn.module.scss';

interface CounterBtnProps {
  value: string;
  type?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

export const CounterBtn = ({
  value,
  type = '',
  onClick,
  isDisabled,
}: CounterBtnProps) => (
  <button className={type === 'add' ? `${styles.btn} ${styles.btnAdd}` : `${styles.btn} ${styles.btnCounter}`}
    aria-label={`button ${value}`}
    type="button"
    onClick={onClick}
    disabled={isDisabled}
  >
    {value}
  </button>
);
