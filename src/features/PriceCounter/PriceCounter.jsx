import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './PriceCounter.module.scss';
import { decrement, increment, resetCounter, selectPriceCounter, setPrice } from './priceCounterSlice';
import CounterBtn from '../../components/CounterBtn/CounterBtn';

const PriceCounter = ({ price }) => {

  const dispatch = useDispatch();
  const { sumPrice, num } = useSelector(selectPriceCounter);

  useEffect(() => {
    dispatch(setPrice(price.value));

    return () => {
      dispatch(resetCounter());
    }
  }, []);

  const handleDecrementClick = () => {
    dispatch(decrement());
  }

  const handleIncrementClick = () => {
    dispatch(increment());
  }

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

export default PriceCounter;
