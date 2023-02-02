import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import { decrement, increment, resetCounter, setPrice } from './priceCounterSlice';
import { selectPriceCounter } from './priceCounterSelect';

type HandleClick = () => void;

export const usePriceCounter = (value: number): [HandleClick, HandleClick, { sumPrice: number | null; num: number }] => {

  const dispatch = useAppDispatch();
  const { sumPrice, num } = useSelector(selectPriceCounter);

  useEffect(() => {
    dispatch(setPrice(value));

    return () => {
      dispatch(resetCounter());
    }
  }, []);

  const handleDecrementClick: HandleClick = () => {
    dispatch(decrement());
  }

  const handleIncrementClick: HandleClick = () => {
    dispatch(increment());
  }

  return [handleDecrementClick, handleIncrementClick, { sumPrice, num }]
}
