import React from 'react';
import { CounterBtn } from 'components/CounterBtn';
import type { Price } from 'types';
import { usePriceCounter } from './usePriceCounter';
import styles from './PriceCounter.module.scss';

interface PriceCounterProps {
  price: Price
}

export const PriceCounter = ({ price }: PriceCounterProps) => {
  const { value } = price;

  const [handleDecrementClick, handleIncrementClick, { sumPrice, num }] = usePriceCounter(value)

  const disabled = num === 1;

  return (
    <div className={styles.priceCounterWrapper}>
      <p className={styles.price}>
        ${sumPrice}
      </p>
      <div className={styles.counter}>
        <CounterBtn
          value="-"
          onClick={handleDecrementClick}
          isDisabled={disabled}
        />
        <input
          className={styles.input}
          type="text"
          value={num}
          readOnly
        />
        <CounterBtn
          value="+"
          onClick={handleIncrementClick}
        />
      </div>
    </div>
  );
};

