import React from 'react';
import classNames from 'classnames';
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
  <button
    className={classNames(styles.btn, {
      [styles.btnAdd]: type === 'add',
      [styles.btnCounter]: type !== 'add'
    })}
    aria-label={`button ${value}`}
    type="button"
    onClick={onClick}
    disabled={isDisabled}
  >
    {value}
  </button>
);
